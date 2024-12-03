import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/dashboard/Sidebar'

function Dashboard() {
  return (
    <div>
       <div>
        <Header/>
       </div>
       <div>
        <Sidebar/>
       </div>
    </div>
  )
}

export default Dashboard