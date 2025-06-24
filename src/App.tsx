// src/App.tsx
import React, { useEffect, useState } from "react";
import "./main.scss";
import Homepage from "./pages/homepage";
import Policies from "./pages/policies";
import DropdownMenu from "./components/DropdownMenu";

// Simple routing logic (for demonstration purposes)
const renderPage = (path: string) => {
  switch (path) {
    case "/policies":
      return <Policies />;
    case "/":
    default:
      return <Homepage />;
  }
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const handlePopState = () => { // Changed name for clarity
      setCurrentPage(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, path, path);
    setCurrentPage(path);
    scrollToTop();
  };

  const scrollToTop = () => {
    const scrollEl = document.scrollingElement || document.documentElement;
    scrollEl.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Determine if the banner should be visible
  const isBannerVisible = currentPage === "/" && !scrolled; // Banner visible only on homepage and when not scrolled

  return (
    <>
      <div className="app-container">
        {/* ─── HERO BANNER ─── */}
        {isBannerVisible && ( // Conditionally render the banner
          <div className="banner">
            <img src="/Header.png" alt="Banner" />
            <div className="banner-content">
              <h1 className="banner-title">Intranet Demo Beta</h1>
              <nav className="banner-nav">
                <a href="#" onClick={() => navigateTo("/")}>Feature A</a>
                <a href="#" onClick={() => navigateTo("/")}>Feature B</a>
                <a href="#" onClick={() => navigateTo("/")}>Feature C</a>
              </nav>
            </div>
          </div>
        )}

        {/* ─── SITE HEADER ─── */}
        <header className={`main-header ${scrolled ? "shrink" : ""}`}>
          <div className="header-container">
            <img src="/uni-kitten.png" alt="Logo" className="logo" />
            <nav className="nav-center">
              <a href="#" onClick={() => navigateTo("/")}>Home</a>
              <a href="#" onClick={() => navigateTo("/policies")}>Policies</a>
              <a href="#" onClick={() => navigateTo("/")}>Directory</a>
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
        {renderPage(currentPage)}

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