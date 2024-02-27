import { useEffect, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

interface SwitchThemeProps {
    darkMode: boolean;
    toggleTheme: () => void;
}
const SwitchTheme: React.FC<SwitchThemeProps> = ({ darkMode, toggleTheme }) => {

    return (
        <label className="switch" >
            <input type="checkbox" id="toggle" onClick={toggleTheme} checked={darkMode} onChange={() => {}}  />
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className="slider round" />
        </label>
    )
}
export default SwitchTheme;