import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { categorias } from "../../data/categorias.json";

const NavBar = () => {
    return (
        <header className="contenedor">
            <nav className="navbar">
                <h1 className="navbar-logo"><Link to={'/'}>BeanieShop</Link></h1>
                <ul className="navbar-menu">
                    <li className="menu-item"><Link to={'/'}>Catálogo</Link></li>
                    {categorias.map(categoria => (
                            <li className="menu-item" key={categoria.id}>
                                <Link to={`/categoria/${categoria.id}`}>{categoria.nombre}</Link>
                            </li>
                    ))}
                    <li className="menu-item"><Link to={'/seguimiento'}>Seguimiento</Link></li>
                    <li className="menu-item"><Link to={'/cart'}><CartWidget /></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;