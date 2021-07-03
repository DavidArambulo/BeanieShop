import React from "react";

const NavBar = () => {
    return (
        <header className="contenedor">
            <nav className="navbar">
                <h1 className="navbar-logo">BeanieShop</h1>
                <ul className="navbar-menu">
                    <li className="menu-item"><a href='#'>Catálogo</a></li>
                    <li className="menu-item"><a href='#'>Seguimiento</a></li>
                    <li className="menu-item"><a href='#'>Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;