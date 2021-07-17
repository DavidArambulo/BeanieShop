import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="contenedor">
            <nav className="navbar">
                <h1 className="navbar-logo">BeanieShop</h1>
                <ul className="navbar-menu">
                    <li className="menu-item"><Link to={'/'}>Home</Link></li>
                    <li className="menu-item"><Link to={'/seguimiento'}>Seguimiento</Link></li>
                    <li className="menu-item"><Link to={'/carrito'}><CartWidget /></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;