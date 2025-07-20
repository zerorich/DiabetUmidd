import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import projects from '../Pages/Projects/projectsData';

const NavBar = ({ logo, heart, arrow }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        };
    }, [menuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [menuOpen]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && menuOpen) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Массивы для всех подменю
    const aboutLinks = [
        { to: "/donation-methods", label: "Способы Пожертвования" },
        { to: "/mission", label: "Наша Миссия" },
        { to: "/board", label: "Члены Правления" },
        { to: "/events", label: "События" },
        { to: "/program", label: "Программа" },
        { to: "/reports", label: "Отчеты о Воздействии" },
        { to: "/sponsors", label: "Спонсоры" },
        { to: "/contact", label: "Свяжитесь с Нами" },
    ];
    const diabetesLinks = [
        { to: "/guidelines", label: "Сахарный Диабет 1 типа" },
        { to: "/education", label: "Сахарный Диабет 2 типа" },
        { to: "/research", label: "Преддиабет" },
        { to: "/publications", label: "Гестационный диабет" },
        { to: "/downloads", label: "Управление Диабетом" },
        { to: "/downloads", label: "Технология Лечения Диабета" },
        { to: "/downloads", label: "Осложнения Сахарного Диабета" },
        { to: "/downloads", label: "Лекарства от Диабета" },
        { to: "/downloads", label: "Исследования Диабета" },
    ];
    const preventionLinks = [
        { to: "/guidelines", label: "Упражнения" },
        { to: "/education", label: "Психологическое Здоровье" },
        { to: "/research", label: "Диета и Питание" },
        { to: "/publications", label: "Образы жизни" },
        { to: "/downloads", label: "Рецепты" },
    ];
    const otherProjectLinks = [
        { to: "/healthy-lifestyle", label: "Здоровый образ жизни" },
        { to: "/primary-care", label: "На уровне первичной медико-санитарной помощи" },
        { to: "/aral-sea", label: "Оценка состояния здоровья населения Приаралья" },
        { to: "/youth-education", label: "Повышение уровня знаний среди молодежи" },
    ];

    return (
        <>
            <nav className='flex px-[16px] py-3 justify-between items-center mx-auto max-w-[1388px] relative z-50 bg-white'>
                <button
                    id="menu-button"
                    type="button"
                    aria-controls="mobile-menu"
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
                    className="z-50 flex-col items-center rounded-lg p-2 hover:bg-gray-100 hidden max-[768px]:inline-flex focus:outline-none focus:ring-2 focus:ring-gray-300"
                    onClick={toggleMenu}
                >
                    <span className={`block h-[2px] w-6 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></span>
                    <span className={`block h-[2px] w-6 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
                    <span className={`block h-[2px] w-6 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>

                <NavLink to="/" className="z-50 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded">
                    <img src={logo} alt="Логотип" className="w-[150px] h-auto" />
                </NavLink>
                <div className='flex flex-col gap-5 max-[768px]:hidden'>
                    <div className='flex gap-2 justify-end'>
                        <NavLink
                            to="/membership"
                            className="text-[#142C3E] w-[277px] h-[45px] flex justify-center items-center hover:bg-black hover:text-white text-[18px] font-bold font-roboto border border-black rounded-[12px] transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            Стать Членом Организации
                        </NavLink>
                        <NavLink
                            to="/donate"
                            className="text-white w-[210px] h-[45px] flex justify-center items-center text-[18px] font-bold font-roboto bg-[#26686E] rounded-[12px] hover:bg-[#1d5258] transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            <img src={heart} alt="" className="mr-2" /> Пожертвовать
                        </NavLink>
                    </div>

                    <ul className='flex justify-end gap-5'>
                        <li className='group relative'>
                            <div className="flex items-center gap-2 text-[#224055] text-[18px] h-[26px] cursor-pointer hover:text-[#142C3E] focus:outline-none focus:ring-2 focus:ring-gray-300 rounded p-1" tabIndex="0">
                                О Нас
                                <img
                                    className="w-[15px] h-2 transition-transform duration-300 group-hover:rotate-180"
                                    src={arrow}
                                    alt=""
                                />
                            </div>
                            <div className="absolute right-0 mt-2 w-[288px] bg-white shadow-lg rounded-xl z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-300">
                                {aboutLinks.map(link => (
                                    <NavLink key={link.to} to={link.to} className="block px-4 py-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                        {link.label}
                                    </NavLink>
                                ))}
                            </div>
                        </li>

                        <li className='group relative'>
                            <div className="flex items-center gap-2 text-[#224055] text-[18px] h-[26px] cursor-pointer hover:text-[#142C3E] focus:outline-none focus:ring-2 focus:ring-gray-300 rounded p-1" tabIndex="0">
                                Проекты
                                <img
                                    className="w-[15px] h-2 transition-transform duration-300 group-hover:rotate-180"
                                    src={arrow}
                                    alt=""
                                />
                            </div>
                            <div className="absolute right-0 mt-2 w-[450px] bg-white shadow-lg rounded-xl z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-300">
                                {projects.map(project => (
                                    <NavLink
                                        key={project.id}
                                        to={`/projects/${project.id}`}
                                        className="block px-4 py-3 rounded-[12px] hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                    >
                                        {project.title}
                                    </NavLink>
                                ))}
                            </div>
                        </li>

                        <li className='group relative'>
                            <div className="flex items-center gap-2 text-[#224055] text-[18px] h-[26px] cursor-pointer hover:text-[#142C3E] focus:outline-none focus:ring-2 focus:ring-gray-300 rounded p-1" tabIndex="0">
                                Понимание Диабета
                                <img
                                    className="w-[15px] h-2 transition-transform duration-300 group-hover:rotate-180"
                                    src={arrow}
                                    alt=""
                                />
                            </div>
                            <div className="absolute right-0 mt-2 w-[280px] bg-white shadow-lg rounded-xl z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-300">
                                {diabetesLinks.map(link => (
                                    <NavLink key={link.label} to={link.to} onClick={closeMenu} className="block py-2 px-4 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                                        {link.label}
                                    </NavLink>
                                ))}
                            </div>
                        </li>
                        <li className='group relative'>
                            <div className="flex items-center gap-2 text-[#224055] text-[18px] h-[26px] cursor-pointer hover:text-[#142C3E] focus:outline-none focus:ring-2 focus:ring-gray-300 rounded p-1" tabIndex="0">
                                Профилактика Диабета
                                <img
                                    className="w-[15px] h-2 transition-transform duration-300 group-hover:rotate-180"
                                    src={arrow}
                                    alt=""
                                />
                            </div>
                            {/* Профилактика диабета */}
                            <div className="absolute right-0 mt-2 w-[280px] bg-white shadow-lg rounded-xl z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-300">
                                {preventionLinks.map(link => (
                                    <NavLink key={link.label} to={link.to} onClick={closeMenu} className="block py-2 px-4 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                                        {link.label}
                                    </NavLink>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <div
                id="mobile-menu"
                className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
            >
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                    onClick={closeMenu}
                    aria-hidden="true"
                ></div>

                <div className="relative bg-white min-h-full z-50 overflow-y-auto">
                    <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
                        <button
                            onClick={closeMenu}
                            className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            aria-label="Закрыть меню"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <NavLink to="/" onClick={closeMenu} className="focus:outline-none focus:ring-2 focus:ring-gray-300 rounded">
                            <img src={logo} alt="Логотип" className="h-12" />
                        </NavLink>

                        <NavLink
                            to="/subscribe"
                            onClick={closeMenu}
                            className="text-[#142C3E] px-4 py-2 font-bold hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            Подписаться
                        </NavLink>
                    </div>
                    <div className="p-4 space-y-4">
                        <NavLink
                            to="/membership"
                            onClick={closeMenu}
                            className="block w-full py-3 px-4 text-center border border-black rounded-lg hover:bg-black hover:text-white font-bold transition-colors focus:outline-none mt-24 focus:ring-2 focus:ring-gray-300"
                        >
                            Стать Членом Организации
                        </NavLink>

                        <NavLink
                            to="/donate"
                            onClick={closeMenu}
                            className="block w-full py-3 px-4 text-center bg-[#26686E] text-white rounded-lg hover:bg-[#1d5258] font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            <div className="flex items-center justify-center">
                                <img src={heart} alt="" className="mr-2" />
                                Пожертвовать
                            </div>
                        </NavLink>

                        <div className="space-y-2">
                            <details className="group">
                                <summary className="flex justify-between items-center p-4 border-b cursor-pointer list-none hover:bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                                    <span className="font-bold text-lg">О Нас</span>
                                    <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </summary>
                                <div className="pl-4 pt-2 pb-4 space-y-2 max-h-[200px] overflow-y-auto">
                                    {aboutLinks.map(link => (
                                        <NavLink key={link.to} to={link.to} onClick={closeMenu} className="block py-2 px-4 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                                            {link.label}
                                        </NavLink>
                                    ))}
                                </div>
                            </details>

                            <details className="group">
                                <summary className="flex justify-between items-center p-4 border-b cursor-pointer list-none hover:bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                                    <span className="font-bold text-lg">Проекты</span>
                                    <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </summary>
                                <div className="pl-4 pt-2 pb-4 space-y-2 h-[240px] overflow-y-auto">
                                    {projects.map(project => (
                                        <NavLink key={project.id} to={`/projects/${project.id}`} onClick={closeMenu} className="block py-2 px-4 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                                            {project.title}
                                        </NavLink>
                                    ))}
                                </div>
                            </details>
                            <details className="group">
                                <summary className="flex justify-between items-center p-4 border-b cursor-pointer list-none hover:bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                                    <span className="font-bold text-lg">Понимание Диабета</span>
                                    <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </summary>
                                <div className="pl-4 pt-2 pb-4 space-y-2 h-[240px] overflow-y-auto">
                                    {diabetesLinks.map(link => (
                                        <NavLink key={link.label} to={link.to} onClick={closeMenu} className="block py-2 px-4 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                                            {link.label}
                                        </NavLink>
                                    ))}
                                </div>
                            </details>
                            <details className="group">
                                <summary className="flex justify-between items-center p-4 border-b cursor-pointer list-none hover:bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                                    <span className="font-bold text-lg">Профилактика Диабета</span>
                                    <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </summary>
                                <div className="pl-4 pt-2 pb-4 space-y-2 max-h-[240px] overflow-y-auto">
                                    {preventionLinks.map(link => (
                                        <NavLink key={link.label} to={link.to} onClick={closeMenu} className="block py-2 px-4 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                                            {link.label}
                                        </NavLink>
                                    ))}
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;