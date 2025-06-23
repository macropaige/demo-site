// src/pages/homepage.tsx
import React, { useEffect, useState } from "react";
import "./homepage.scss";

const Homepage: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={`background-layer ${scrolled ? "scrolled" : ""}`} />

            <main className="home-content">
                <section className="hero">
                    <h2>Intranet Demo Beta</h2>
                    <p>Repeating scroll lines using array</p>
                </section>

                <section className="info">
                    <div className="info-wrapper">
                        <p>Lorem ipsum...</p>
                        {Array.from({ length: 200 }).map((_, i) => (
                            <p key={i}>This is sample scroll content #{i + 1}</p>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Homepage;
