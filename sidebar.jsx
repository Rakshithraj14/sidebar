import { useState } from "react";
import logo from "./logo.svg";
import "./Sidebar.css";

const navIteams = ["Home", "Comics", "Bookmarks", "settings"];

export const Sidebar = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="inner">
                <header>
                    <button type="button" className="burger" onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="material...">
                            {isOpen ? "close" : "menu"}
                        </span>
                    </button>
                    <img src={logo} />
                </header>
                <nav>
                    {navIteams.map(item => (
                        <button key={item} type="button">
                            <span className="material...">{item}</span>
                            <p>{item}</p>
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    );
};
                        
               