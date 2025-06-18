import React from "react";
import "./DropdownMenu.scss";

export interface DropdownItem {
    label: string;
    href: string;
}

interface DropdownMenuProps {
    label: string;
    items: DropdownItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items }) => {
    return (
        <div className="dropdown">
            <span className="dropdown-label">{label}</span>
            <div className="dropdown-content">
                {items.map((item, idx) => (
                    <a href={item.href} key={idx}>
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default DropdownMenu;
