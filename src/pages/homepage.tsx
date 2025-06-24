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

      <main className={`home ${scrolled ? "visible" : ""}`}>
        <section className="hero">
          <h2>Intranet Demo Beta</h2>
          <p>
            Welcome to the new company intranet demo! This platform will serve as
            the central hub for news, links, and resources.
          </p>
        </section>

        {/* you can add as many sections as you like */}
        <section className="content">
          <h3>Getting Started</h3>
          <p>
            To begin, use the navigation links above or explore the quick‐link
            buttons in the banner. You’ll find department directories, policy
            documents, and more.
          </p>

          <h3>Features</h3>
          <ul>
            <li>Real-time announcements</li>
            <li>User directory and contact lookup</li>
            <li>Quick access to HR and IT ticketing</li>
          </ul>

          <p>
            For feedback or issues, please contact IT at{" "}
            <a href="mailto:it-support@example.com">it-support@example.com</a>.
          </p>
        </section>
      </main>
        </>
    );
};

export default Homepage;
