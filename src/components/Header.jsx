import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
    };

    // Define array of navigation items
    const navItems = [
        {
            path: "/",
            text: "Home"
        },
        {
            path: "/posts",
            text: "All Posts"
        }
    ];

    const renderNavLinks = () => (
        <ul className="flex flex-col lg:flex-row w-full lg:w-fit gap-5">
            {user ? navItems.map((item, index) => (
                <li key={index} className="flex w-full lg:w-fit">
                    <NavLink to={item.path} className="px-5 lg:px-10 w-full lg:w-fit flex rounded-md py-2 hover:backdrop-blur-sm hover:bg-[rgba(246,244,244,0.09)] lg:backdrop-blur-sm lg:bg-[rgba(246,244,244,0.09)] " onClick={closeMobileMenu}>
                        {item.text}
                    </NavLink>
                </li>
            )) : null}
            {user ? (
                <li>
                    <Button buttonText="LogOut" onclickHandler={handleLogout} />
                </li>
            ) : null
            }
        </ul>
    );

    return (
        <header className="flex w-full sticky z-30 top-0 left-0 right-0 bg-neutral-900 text-white py-2 border-b border-neutral-600">
            <nav className="flex w-full px-5 items-center justify-between max-w-7xl mx-auto">
                <NavLink to="/" className="flex text-2xl lg:text-3xl font-bold">
                    <div className="w-fit">
                        <span className="text-blue-500">CineVerse</span>
                        <span>Hub</span>
                    </div>
                </NavLink>

                <div className="flex lg:hidden">
                    <div className=" cursor-pointer" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>

                <div className={`flex z-50 fixed top-0 right-0 bg-neutral-800 flex-col gap-5 h-screen w-80 p-4 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:relative lg:h-auto lg:bg-transparent lg:border-none lg:w-auto lg:p-0 lg:transition-none lg:translate-x-0`} id="nav-menu">
                    <div className="flex lg:hidden w-full">
                        <NavLink to="/" className="flex text-2xl lg:text-3xl font-bold">
                            <div className="w-fit">
                                <span className="text-blue-500">CineVerse</span>
                                <span>Hub</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="flex w-full">
                        {renderNavLinks()}
                    </div>
                    <div className="lg:hidden absolute top-4 right-4 cursor-pointer" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
