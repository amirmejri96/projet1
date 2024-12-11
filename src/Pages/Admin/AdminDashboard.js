import React from 'react'


const AdminDashboard = ({logout}) => {
  return (
    <button   onClick={()=>logout()} >logout</button>
  )
}

export default AdminDashboard