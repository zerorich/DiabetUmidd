import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import logo from "../assets/DiabetUmidLogo.svg"
import heart from "../assets/Heart.svg"
import arrow from "../assets/arrow.svg"
import instagram from "../assets/Instagram.svg"
import facebook from "../assets/Facebook.svg"
const RootLayout = () => {
    return (
        <>
            <header>
                <NavBar logo={logo} heart={heart} arrow={arrow} facebook={facebook} instagram={instagram}/>
            </header>
            <Outlet />
            <Footer heart={heart}/>
        </>
    )
}

export default RootLayout