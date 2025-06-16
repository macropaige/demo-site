import React, { useEffect, useState } from "react";
import "/src/main.scss";

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowContent(window.scrollY > 100); // adjust threshold if needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollTarget = document.scrollingElement || document.documentElement;
    scrollTarget.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={`background-layer ${scrolled ? "scrolled" : ""}`} />

      <div className="app-container">
        <div className={`banner ${scrolled ? "fade-out" : ""}`}>
          <img src="/Header.png" alt="Banner" />
        </div>

        <header className={`main-header ${scrolled ? "shrink" : ""}`}>
          <div className="header-container">
            <img src="/logo.svg" alt="Logo" className="logo" />
            <nav className="nav-center">
              <a href="#">Home</a>
              <a href="#">Updates</a>
              <a href="#">Directory</a>
            </nav>
          </div>
        </header>
        <div style={{ height: "300px" }} />
        <div style={{ height: "auto" }} />
        <main className={`content ${showContent ? "fade-in" : "hidden"}`}></main>
        <main className={`content ${showContent ? "fade-in" : "hidden"}`}>
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

        <footer className="footer-image">
          <img src="/footer02.png" alt="Footer landscape" />
          <div className="footer-text">
            © 2025 Kitty Cat Patty Wack. All rights reserved.
          </div>
        </footer>
      </div>

      {scrolled && (
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>

      )}
    </>
  );
};

export default App;
