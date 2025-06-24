import React, { useState, useRef, useEffect } from "react";
import "./DropdownMenu.scss";

interface DropdownItem {
    label: string;
    href: string;
}

interface DropdownMenuProps {
    title: string;
    items: DropdownItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggle = () => setIsOpen((o) => !o);

    return (
        <div className="dropdown" ref={ref}>
            <button className="dropdown-toggle" onClick={toggle}>
                {title}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {items.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;

