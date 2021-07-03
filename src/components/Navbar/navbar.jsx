import React from "react";

const NavBar = () => {
    return (
        <header className="contenedor">
            <nav className="navbar">
                <h1 className="navbar-logo">BeanieShop</h1>
                <ul className="navbar-menu">
                    <li className="menu-item">Catálogo</li>
                    <li className="menu-item">Seguimiento</li>
                    <li className="menu-item">Contacto</li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;