import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

export default function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);
    const handleClick = () => {
        setIsDarkMode(!isDarkMode);
    }
    return (
        <div>
            <button onClick={handleClick}>
                {isDarkMode ? <IoIosSunny /> : <IoMoon />}
                </button>
        </div>
    )
}
