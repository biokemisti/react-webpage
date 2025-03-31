import React from 'react';
import '../styles/components/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">Koodikorjaamo</div>
            <div className="nav-container">
                <a href="#hero" className="nav-button">Alkuun</a>
                <a href="#about" className="nav-button">Meistä</a>
                <a href="#services" className="nav-button">Palvelut</a>
                <a href="#contact" className="nav-button">Ota yhteyttä</a>
            </div>
        </header>
    );
}

export default Header;