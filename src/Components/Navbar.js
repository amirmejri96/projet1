import React from 'react'
import('./Styles/NavbarStyle.css')

const Navbar = () => {
  return (
    
    <nav className="navbar">
        <div className="logo">
            <img style={{width:'15%'}} src='../../assets/icone edition 1.png' alt='Logo' />
        </div>
        <ul className="nav-links">
            <li><a href="/accueil">Accueil</a></li>
            <li className="dropdown">
                <a href="#editions" className="dropdown-toggle">Éditions</a>
                <ul className="dropdown-menu">
                    <li><a href="#editions-passees">Éditions passées</a></li>
                    <li><a href="#editions-a-venir">Édition à venir</a></li>
                </ul>
            </li>
            <li><a href="#a-propos">À propos</a></li>
        </ul>
    </nav>
    
  )
}

export default Navbar