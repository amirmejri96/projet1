import React from 'react';
import './UserStyle.css';


const UserDashboard = () => {
  return (
    <div className='body'>
    <div className="sidebar">
        <img src="user-photo.jpg" alt="UserPhoto"/>
        <h2>Nom Prénom</h2>
        <a href='/' className="logout-btn">Déconnexion</a>
    </div>
    <div className="content">
        <div className="event-card">
            <img src="/assets/Affiche a venir.jpg" alt="EventPhoto"/>
            <div className="info">
                <h3>Nom de l'événement</h3>
                <p><strong>Édition:</strong> #3</p>
                <p><strong>Description:</strong> Une description captivante de l'événement.</p>
                <p><strong>Lieu:</strong> Djerba, Tunisie</p>
                <p><strong>Date:</strong> 25 décembre 2024</p>
                <p><strong>Lineup:</strong> DJ A, DJ B, DJ C</p>
                <p><strong>Prix des tickets:</strong> 50 TND</p>
            </div>
            <a href="/reservation" className="reserve-btn">Réserver vos tickets</a>
        </div>
    </div>
    </div>
  );
};

export default UserDashboard;