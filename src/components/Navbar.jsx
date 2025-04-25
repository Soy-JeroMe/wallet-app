// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación entre páginas

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú desplegable

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna el estado del menú (abierto/cerrado)
  };

  return (
    <nav className="bg-purple-800 text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Wallet App</h1>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#balance" className="hover:text-gray-300">
              Balance
            </a>
          </li>
          <li>
            <a href="#stats" className="hover:text-gray-300">
              Estadísticas
            </a>
          </li>
          <li>
            <Link to="/graphs" className="hover:text-gray-300">
              Gráficos
            </Link>
          </li>
          <li>
            <Link to="/history" className="hover:text-gray-300">
              Historial
            </Link>
          </li>
        </ul>

        {/* Menú de hamburguesa para pantallas pequeñas */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <a href="#balance" className="hover:text-gray-300">
            Balance
          </a>
          <a href="#stats" className="hover:text-gray-300">
            Estadísticas
          </a>
          <Link to="/graphs" className="hover:text-gray-300">
            Gráficos
          </Link>
          <Link to="/history" className="hover:text-gray-300">
            Historial
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
