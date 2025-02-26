//import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./CSS/style.css";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="Navbar">
            <nav>
                <div>
                    <div className="Nav-name">
                        <Link to="#home" smooth>
                            JENNY CHO
                        </Link>
                    </div>
                    <button
                        href="#"
                        className="toggle-button"
                        onClick={handleClick}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <ul className={`Navlist${isActive ? "-active" : ""}`}>
                    <li className="Navlist-links">
                        <Link to="#about" smooth>
                            About
                        </Link>
                    </li>
                    <li className="Navlist-links">
                        <Link to="#portfolio" smooth>
                            Portfolio
                        </Link>
                    </li>
                    <li className="Navlist-links">
                        <Link to="#contact" smooth>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
