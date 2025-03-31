import React, { useState, useEffect } from 'react';
import '../styles/components/Hero.css';

function Hero() {
    const [text, setText] = useState('');
    const fullText = 'Teervetuloa Koodikorjaamoon!';
    const typingSpeed = 100;

    useEffect(() => {
        let index = 0;

        const type = () => {
            if (index < fullText.length - 1) {
                setText((prev) => prev + fullText[index]);
                index++;
                setTimeout(type, typingSpeed);
            }
        };

        type();

        return () => {
            index = fullText.length;
        };
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1>{text}<span className="cursor"></span></h1>
                <p>Ongelmia sotkuisen koodin kanssa? <br />Ei hätää, me autamme!</p>
                <p>Debuggaus-, refaktorointi-, optimointi- ja konsultointipalvelut</p>
                <a href="#contact" className="hero-button">Pyydä hinta-arvio</a>
            </div>
        </section>
    );
}

export default Hero;