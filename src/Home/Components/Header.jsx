import React from "react";
import { Link } from "react-router-dom";
import './CSS/Header.css'

export default function Header() {
    return (
        <div>
            <div className="header">
            <Link to="/" className="h1-Header">ValorantStatus</Link>
            <p className="link-Header">Home</p>
            <Link to="/Eventos" className="link-Header">Eventos</Link>
            <p className="link-Header">Mapas</p>
            <p className="link-Header">Armas</p>
            <p className="link-Header">Notícia</p>
            <p className="link-Header">Sobre</p>
        </div>
        </div>
    );
}