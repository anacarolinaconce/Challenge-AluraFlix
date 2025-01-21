import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>AluraFlix</h1>
      </div>
      <nav className="botoes">
        <Link to="/">Início</Link>
        <Link to="/add-video">Novo Vídeo</Link>
      </nav>
    </header>
  );
};

export default Header;