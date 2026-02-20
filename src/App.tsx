import LandingHero from './Components/LandingHero'
import PeopleConnect from './Components/PeopleConnect'
import SmarterSupport from './Components/SmarterSupport'
import Experience from './Components/Experience'
import ClearValue from './Components/ClearValue'
import GlobalExpertise from './Components/GlobalExpertise'
import Blog from './Components/Blog'
import UsaLayout from './layout/USALayout'
import './App.css'

function App() {
  return (
    <UsaLayout>
      <>
        <LandingHero />
        <PeopleConnect />
        <SmarterSupport />
        <Experience />
        <ClearValue />
        <GlobalExpertise />
        <Blog />
      </>
    </UsaLayout>
  )
}

export default App
