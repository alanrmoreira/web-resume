import { useState } from 'react'
import MainBanner from './components/MainBanner'
import Summary from './components/Summary'
import ProfessionalExperience from './components/ProfessionalExperience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
      {/* <MainBanner/> */}
      <Summary/>
      <ProfessionalExperience/>
      <Education/>
      <Certifications/>
    </>
  )
}

export default App
