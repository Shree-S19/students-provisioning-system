import { useState,useEffect } from 'react'
import './Dashboard.css';
import DashboardTop from './DashboardTop/DashboardTop.jsx';
import StudentListing from './StudentListing/StudentListing.jsx';

function Dashboard() {
  const [count, setCount] = useState(19)

  return (
    <div className='dashboard-bgd'>
        <DashboardTop className='dashboard-components'/>
        <div className='dashboard-home'>
            <StudentListing className='dashboard-components'/>
        </div>
    </div>
  )
}
//students
export default Dashboard
