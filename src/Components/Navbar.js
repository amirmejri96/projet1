import React from 'react'
import('./Styles/NavbarStyle.css')

const Navbar = () => {
  return (
    
    <nav className="navbar">
        <div className="logo">
            <img style={{width:'20%', paddingLeft:'200px'}} src='../../assets/icone.png' alt='Logo' />
        </div>
        <ul className="nav-links">
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li className="dropdown">
                <a href="#editions" className="dropdown-toggle">Éditions</a>
                <ul className="dropdown-menu">
                    <li><a href="/edition">Éditions passées</a></li>
                    <li><a href="#editions-a-venir">Édition à venir</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    
  )
}

export default Navbar