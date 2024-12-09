import React from 'react'

const UserDashboard = ({logout}) => {
  return (
    <div>
        <h1> UserDashboard </h1>
        <button   onClick={()=>logout()} >logout</button>
    </div>
  )
}

export default UserDashboard