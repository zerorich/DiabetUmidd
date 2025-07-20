import React, { useState, useEffect } from 'react';

// Mock components for demonstration
const NavBar = () => (
    <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3">
            <div className="text-xl font-bold text-gray-800">УМИД</div>
        </div>
    </nav>
);

const Footer = () => (
    <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 УМИД. Все права защищены.</p>
        </div>
    </footer>
);

const NewsArticle = ({ article, onBack }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
            
            {/* Header with glass effect */}
            <div className="sticky top-0 z-10 backdrop-blur-lg bg-white/80 border-b border-gray-200/50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <button
                        onClick={onBack}
                        className="group flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 transform hover:scale-105"
                    >
                        <div className="w-8 h-8 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center mr-3 transition-all duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </div>
                        Назад к ленте
                    </button>
                    
                    {/* Article meta info */}
                    <div className="hidden md:flex items-center space-x-4 text-sm text-gray-500">
                        <span className="bg-gray-100 px-3 py-1 rounded-full">{article.date}</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Новости</span>
                    </div>
                </div>
            </div>

            {/* Article content */}
            <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
                {/* Hero image with parallax effect */}
                {article.image && (
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-auto max-h-[70vh] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
                                <p className="text-gray-600 text-sm">{article.date}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Article content with enhanced typography */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                    
                    <div className="relative z-10">
                        {!article.image && (
                            <div className="mb-8">
                                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">{article.title}</h1>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                    <span className="bg-gray-100 px-3 py-1 rounded-full">{article.date}</span>
                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Новости</span>
                                </div>
                            </div>
                        )}

                        <div className="prose max-w-none text-gray-800 text-lg leading-relaxed">
                            {article.fullContent || (
                                <>
                                    <p className="mb-6 text-xl text-gray-700 font-medium">{article.summary}</p>
                                    <p className="mb-6">Это расширенное содержание новости. Здесь может быть подробный текст, который не поместился в кратком описании на карточке.</p>
                                    <p className="mb-6">Дополнительные детали и информация о событии, описанном в новости.</p>
                                    <p>Заключительная часть материала с выводами и перспективами.</p>
                                </>
                            )}
                        </div>

                        {/* Share buttons */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600 font-medium">Поделиться:</span>
                                <div className="flex space-x-3">
                                    {['Facebook', 'Twitter', 'LinkedIn'].map((platform) => (
                                        <button
                                            key={platform}
                                            className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors duration-300"
                                        >
                                            <span className="text-xs font-medium text-gray-600">{platform[0]}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NewsCarousel = ({ news, onArticleClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(1);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
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

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex >= news.length - slidesToShow ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [news.length, slidesToShow, isAutoPlaying]);

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
        <div className="w-full max-w-7xl mx-auto p-6">
            {/* Enhanced header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Лента новостей
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Следите за последними новостями и обновлениями нашей организации
                </p>
                <div className="mt-6 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
            </div>

            {/* Carousel controls */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            isAutoPlaying 
                                ? 'bg-blue-100 text-blue-700' 
                                : 'bg-gray-100 text-gray-700'
                        }`}
                    >
                        {isAutoPlaying ? 'Пауза' : 'Воспроизвести'}
                    </button>
                    <span className="text-sm text-gray-500">
                        {currentIndex + 1} из {news.length - slidesToShow + 1}
                    </span>
                </div>
                
                <div className="flex space-x-2">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Enhanced news cards */}
            <div className="relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
                    {visibleNews.map((item, index) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                animation: 'fadeInUp 0.6s ease-out forwards'
                            }}
                        >
                            {/* Image with overlay effects */}
                            {item.image && (
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                                        {item.date}
                                    </div>
                                </div>
                            )}
                            
                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                    {item.summary}
                                </p>
                                
                                {/* Action area */}
                                <div className="flex justify-between items-center">
                                    {!item.image && (
                                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                            {item.date}
                                        </span>
                                    )}
                                    <button
                                        onClick={() => onArticleClick(item)}
                                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ml-auto"
                                    >
                                        Читать полностью
                                    </button>
                                </div>
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enhanced pagination */}
            <div className="flex justify-center mt-12">
                <div className="flex space-x-3 bg-white rounded-full px-6 py-3 shadow-lg">
                    {Array.from({ length: news.length - slidesToShow + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentIndex === index 
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const NewsFeed = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    
    const newsData = [
        {
            id: 1,
            title: "Наша организация получила грант",
            summary: "Наша организация БОО «УМИД» в октябре 2023г получила грант",
            fullContent: (
                <div className="space-y-6">
                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                        Наша организация БОО «УМИД» в октябре 2023г получила грант «Оценка состояния здоровья населения Приаралья и формирование у них стойкой мотивации к ведению здорового образа жизни для укрепления здоровья» от Общественного Фонда поддержки Негосударственных Некоммерческих Организаций Узбекистана.
                    </p>
                    <p className="text-lg leading-relaxed">
                        В рамках реализации гранта при поддержки МЗРК 26.01.2024г в Кунграде проведен интерактивный семинар «Роль патронажных мед. сестер в проведении активной просветительской работы среди населения по профилактики диабета и ведению здорового образа жизни» для 191 патронажных мед сестер первичного звена из Муйнакого, Кунградского, Канлыкульского районов.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Всем участникам семинара предоставлены информационные материалы по правильному питанию и физическим нагрузкам, а также плакаты по профилактике диабета для дальнейшей работы среди населения по ведению здорового образа жизни и раннему выявлению людей с диабетом 2 типа.
                    </p>
                </div>
            ),
            date: "15 июля 2023",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
        },
        {
            id: 2,
            title: "Мы провели Семинар",
            summary: "Мы совместно с Ташкентским городским управлением здравоохранения...",
            fullContent: (
                <div className="space-y-6">
                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                        БООИИБСД «УМИД» совместно с Ташкентским городским управлением здравоохранения Хокимията к Международному Дню Диабета с целью повышения квалификации врачей и организации командного подхода при лечении больных диабетом 14 ноября в коференц-зале Городской больницы №7 провели семинар для врачей на тему «Специализированная помощь больным диабетом на уровне первичного звена».
                    </p>
                    <p className="text-lg leading-relaxed">
                        В семинаре приняли участие более 70 врачей (эндокринологи, офтальмологи, кардиологи, хирурги, семейных врачей). На семинаре своими докладами выступили ведущие специалисты: РСНПМЦ Кардиологии, РСНПМЦ Эндокринологии им. акад. Ё.Х. Туракулова, Центра развития профессиональной квалификации медицинских работников, кафедры офтальмологии.
                    </p>
                </div>
            ),
            date: "15 июля 2025",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop"
        },
        {
            id: 3,
            title: "Запуск нового продукта",
            summary: "Компания представила инновационное решение для рынка",
            fullContent: (
                <div className="space-y-6">
                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                        Сегодня наша компания представила революционный продукт, который изменит подход к решению повседневных задач. Новое решение сочетает в себе передовые технологии и удобный интерфейс, что делает его доступным для широкого круга пользователей.
                    </p>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Основные особенности нового продукта:</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Инновационный алгоритм обработки данных
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Удобный и интуитивно понятный интерфейс
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Интеграция с популярными сервисами
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Кроссплатформенная поддержка
                            </li>
                        </ul>
                    </div>
                    <p className="text-lg leading-relaxed">
                        Продукт уже получил положительные отзывы от первых тестировщиков и будет доступен в продаже с следующего месяца. Предзаказ откроется уже на следующей неделе.
                    </p>
                </div>
            ),
            date: "15 июля 2025",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
        },
        {
            id: 4,
            title: "Конференция по здравоохранению",
            summary: "Международная конференция собрала ведущих специалистов",
            fullContent: (
                <div className="space-y-6">
                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                        Вчера в Ташкенте состоялась международная конференция по здравоохранению, которая собрала более 200 специалистов из разных стран. Мероприятие было посвящено современным подходам к лечению и профилактике хронических заболеваний.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Наша организация БОО «УМИД» выступила с докладом о работе с пациентами с сахарным диабетом. Было представлено исследование об эффективности комплексного подхода к лечению.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Участники конференции высоко оценили наш опыт и выразили заинтересованность в дальнейшем сотрудничестве. Планируется организация совместных проектов с международными партнерами.
                    </p>
                </div>
            ),
            date: "10 июля 2025",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
        },
    ];

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    };

    const handleBackClick = () => {
        setSelectedArticle(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {selectedArticle ? (
                <div>
                    <NavBar />
                    <NewsArticle article={selectedArticle} onBack={handleBackClick} />
                    <Footer />
                </div>
            ) : (
                <div className="py-16">
                    <NewsCarousel news={newsData} onArticleClick={handleArticleClick} />
                </div>
            )}
            
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default NewsFeed;