import React from 'react'
import './AdminStyle.css'


const AdminDashboard = () => {
  return (
    <div className='Admin'>
      <h1>Admin Dashboard</h1>

<h2>Table des Utilisateurs</h2>
<table>
    <thead>
        <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Âge</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Doe</td>
            <td>John</td>
            <td>john.doe@example.com</td>
            <td>30</td>
            <td>
                <button class="btn btn-edit">Éditer</button>
                <button class="btn btn-delete">Supprimer</button>
            </td>
        </tr>
        
    </tbody>
</table>

<h2>Table des Réservations</h2>
<table>
    <thead>
        <tr>
            <th>Nom complet</th>
            <th>Email</th>
            <th>Numéro de téléphone</th>
            <th>Nombre de tickets réservés</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Jane Doe</td>
            <td>jane.doe@example.com</td>
            <td>+21612345678</td>
            <td>2</td>
            <td>
                <button class="btn btn-confirm">Confirmer</button>
                <button class="btn btn-reject">Rejeter</button>
            </td>
        </tr>
        
    </tbody>
</table>
      
    </div>
  )
}

export default AdminDashboard