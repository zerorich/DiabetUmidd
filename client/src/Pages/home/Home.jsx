import React from 'react';
import NewsFeed from '../News/NewsCarousel';
import card1 from "../../assets/card1.svg"
import card2 from "../../assets/card2.svg"
import card3 from "../../assets/card3.svg"
const Home = () => {
  const cards = [
    {
      id: 1,
      title: "Факторы риска и вы",
      icon: card1,
      link: "/error"
    },
    {
      id: 2,
      title: "Управление Диабетом",
      icon: card2,
      link: "/error"
    },
    {
      id: 3,
      title: "Осложнения",
      icon: card3,
      link: "/error"
    }
  ];

  return (
    <div>


      <NewsFeed />
      <section className="bg-white py-[5.954%] max-[1400px]:px-[2%] max-[768px]:px-0">
        <div className="flex px-[14%] justify-between max-[1314px]:px-[9%] max-[1119px]:px-[2%] max-[768px]:flex-col max-[768px]:gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => window.location.href = card.link}
              className="cursor-pointer flex flex-col justify-between bg-[#FDF9F2] w-[30%] h-[391px] rounded-md pb-4 px-6 max-[768px]:w-full max-[768px]:h-[56.2px] max-[768px]:px-[16px] max-[768px]:py-[8px] hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center pt-[96px] gap-2 max-[768px]:flex-row max-[768px]:p-0 max-[768px]:gap-0">
                <img
                  className="w-[87px] h-[106px] max-[768px]:w-[33px] max-[768px]:h-[40px]"
                  src={card.icon}
                  alt={card.title}
                />
                <p className="font-roboto text-[32px] font-bold text-center max-[768px]:text-[24px] max-[768px]:font-normal max-[768px]:ml-2">
                  {card.title}
                </p>
              </div>
              <a
                href={card.link}
                className="font-roboto text-[18px] font-semibold flex items-center text-[#142C3E] hover:text-[#24636a] ml-auto max-[768px]:hidden"
              >
                <span>Читать далее</span>
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-200 font-semibold"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;