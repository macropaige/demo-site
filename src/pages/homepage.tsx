// src/pages/homepage.tsx
import React, { useEffect, useState } from "react";
import "./homepage.scss";
import InteractiveCard from "../components/InteractiveCard"; // Import the new component

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
                        Intranet demo page! This platform will serve as
                        the central hub for news, links, and resources.
                    </p>
                </section>

                {/* existing content section */}
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

                {/* New Section Break */}
                <section className="highlight-section">
                    <h3>Important Announcements</h3>
                    <p>
                        Stay tuned for upcoming events and important updates from your department!
                        This section highlights key information.
                    </p>
                    <ul>
                        <li>Company Holiday Party: December 15th</li>
                        <li>New Software Rollout: Coming Soon!</li>
                    </ul>
                </section>

                {/* New Interactive Cards Section */}
                <section className="card-showcase-section">
                    <h2>Quick Access & Resources</h2>
                    <div className="interactive-card-container">
                        <InteractiveCard
                            title="IT Documentation"
                            description="Access all essential IT policies, guides, and manuals."
                            link="https://sharepoint.example.com/it-docs" // Example SharePoint link
                        />
                        <InteractiveCard
                            title="Team Collaboration"
                            description="Find information about our Teams channels and group projects."
                            link="https://teams.microsoft.com/l/team/ITDepartment" // Example Teams link
                        />
                        <InteractiveCard
                            title="Software Repository"
                            description="Links to our department's shared drive for executable files."
                            link="file:///your/company/shared/drive/ITDepartment/Software" // Link to shared drive
                        />
                         <InteractiveCard
                            title="Support & Help"
                            description="Submit a ticket or find answers to common IT issues."
                            link="https://mckesson1.service-now.com/" // ServiceNow link from App.tsx
                        />
                    </div>
                </section>
            </main>
        </>
    );
};

export default Homepage;