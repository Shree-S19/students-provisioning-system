import { useState,useEffect } from 'react'
import './DashboardTop.css'
import AddButton from './AddButton/AddButton';4

function DashboardTop() {

  return (
    <div className='dashboardTop-bgd'>
        <div className='dashboardTop-nameBoard'>
            College name
        </div>
        <div className='dashboardTop-studentCounter'>
            studentsCount
        </div>
        <div>
          <AddButton/>
        </div>
    </div>
  )
}

export default DashboardTop;
