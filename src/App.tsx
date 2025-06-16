import React, { useEffect, useState } from "react";
import "/src/main.scss"; // Adjust path if needed

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Full-screen background layer */}
      <div className={`background-layer ${scrolled ? "scrolled" : ""}`} />

      {/* Main app content on top */}
      <div className="app-container">
        <header className={`main-header ${scrolled ? "shrink" : ""}`}>
          <div className="header-container">
            <img src="/logo.svg" alt="Beacon Co. Logo" className="logo" />
            <nav className="nav-center">
              <a href="#">Home</a>
              <a href="#">Updates</a>
              <a href="#">Directory</a>
            </nav>
          </div>
        </header>

        <main className="content">
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