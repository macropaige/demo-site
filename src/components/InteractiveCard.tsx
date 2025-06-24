// src/components/InteractiveCard.tsx
import React from 'react';
import './InteractiveCard.scss'; // Import the SCSS for styling

interface InteractiveCardProps {
    title: string;
    description: string;
    link?: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ title, description, link }) => {
    const handleClick = () => {
        if (link) {
            window.open(link, '_blank', 'noopener noreferrer');
        }
    };

    return (
        <div className="interactive-card" onClick={handleClick}>
            <h4>{title}</h4>
            <p>{description}</p>
            {link && <a href={link} target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px', display: 'inline-block' }}>Learn More</a>}
        </div>
    );
};

export default InteractiveCard;