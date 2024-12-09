import React from 'react'

const AdminDashboard = ({logout}) => {
  return (
    <div>
        <h1> AdminDashboard </h1>
        <button onClick={()=>logout()} >logout</button>
    </div>
  )
}

export default AdminDashboard