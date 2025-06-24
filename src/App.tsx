// src/App.tsx
import React, { useEffect, useState } from "react";
import "./main.scss";
import Homepage from "./pages/homepage";
import DropdownMenu from "./components/DropdownMenu";

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
    const scrollEl = document.scrollingElement || document.documentElement;
    scrollEl.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="app-container">
        {/* ─── HERO BANNER ─── */}
        <div className={`banner ${scrolled ? "fade-out" : ""}`}>
          <img src="/Header.png" alt="Banner" />
          <div className="banner-content">
            <h1 className="banner-title">Intranet Demo Beta</h1>
            <nav className="banner-nav">
              <a href="#">Feature A</a>
              <a href="#">Feature B</a>
              <a href="#">Feature C</a>
            </nav>
          </div>
        </div>

        {/* ─── SITE HEADER ─── */}
        <header className={`main-header ${scrolled ? "shrink" : ""}`}>
          <div className="header-container">
            <img src="/uni-kitten.png" alt="Logo" className="logo" />
            <nav className="nav-center">
              <a href="#">Home</a>
              <a href="#">Updates</a>
              <a href="#">Directory</a>
              {/* your new dropdown */}
              <DropdownMenu
                title="Application Links"
                items={[
                  { label: "Workday", href: "https://wd5.myworkday.com/usoncology/d/home.htmld", iconSrc: "/workday_blue.png" },
                  { label: "OKTA Dashboard", href: "https://usonsso.okta.com/", iconSrc: "/okta.png" },
                  { label: "ServiceNow", href: "https://mckesson1.service-now.com/", iconSrc: "/service_now.png" },
                ]}
              />
            </nav>
          </div>
        </header>

        {/* ─── PAGE CONTENT ─── */}
        <Homepage />

        {/* ─── FOOTER ─── */}
        <footer className="footer-image">
          <img src="/footer02.png" alt="Footer landscape" />
          <div className="footer-text">
            © 2025 Kitty Cat Patty Wack. All rights reserved.
          </div>
        </footer>
      </div>

      {/* ─── BACK TO TOP ─── */}
      {scrolled && (
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
      )}
    </>
  );
};

export default App;

