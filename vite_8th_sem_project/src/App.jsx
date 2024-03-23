import { useState } from 'react'
import Dashboard from './StudentsDetails/Dashboard.jsx'
import StudentProfileBgd from './StudentProfile/StudentProfileBgd.jsx'
import Curl_container from './CURLPage/Curl_container/Curl_container.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Dashboard/> */}
     {/* <StudentProfileBgd/> */}
    <Curl_container/>
    </>
  )
}

export default App
