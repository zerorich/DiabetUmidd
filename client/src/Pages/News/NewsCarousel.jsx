import React from 'react';
import { useNavigate } from 'react-router-dom';
import n5 from "../../assets/n5.jpg";
import n6 from "../../assets/n6.jpg";

const NewsCarousel = ({ news }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [slidesToShow, setSlidesToShow] = React.useState(1);
    const navigate = useNavigate();

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSlidesToShow(3);
            } else if (window.innerWidth >= 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= news.length - slidesToShow ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? news.length - slidesToShow : prevIndex - 1
        );
    };
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    const visibleNews = news.slice(currentIndex, currentIndex + slidesToShow);
    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Лента новостей</h2>
            <div className="relative">
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                    aria-label="Предыдущий"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                    aria-label="Следующий"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-500">
                    {visibleNews.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                            onClick={() => navigate(`/news/${item.id}`)}
                        >
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                                <p className="text-gray-600 mb-3">{item.summary}</p>
                                <div className="flex justify-between items-center mt-auto">
                                    <span className="text-sm text-gray-500">{item.date}</span>
                                    <span className="text-blue-600 hover:text-blue-800 mt-auto text-sm font-medium">Читать →</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: news.length - slidesToShow + 1 }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 p-2 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                        aria-label={`Перейти к слайду ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

const newsData = [
    {
        id: "1",
        title: "Наша организация получила грант",
        summary: "Наша организация БОО «УМИД» в октябре 2023г получила грант",
        date: "15 июля 2023",
        image: n5
    },
    {
        id: "2",
        title: "Мы провели Семинар",
        summary: "Мы совместно с Ташкентским городским управлением здравоохранения...",
        date: "15 июля 2025",
        image: n6
    },
    {
        id: "3",
        title: "Запуск нового продукта",
        summary: "Компания представила инновационное решение для рынка",
        date: "15 июля 2025",
        image: "https://picsum.photos/1600/900?tech"
    }
];

const NewsFeed = () => {
    return (
        <div className="bg-gray-50 px-4 max-[768px]:px-0">
            <NewsCarousel news={newsData} />
        </div>
    );
};

export default NewsFeed;