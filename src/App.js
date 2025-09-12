import MainBanner from './components/MainBanner/MainBanner';
import Summary from './components/Summary/Summary';
import ProfessionalExperience from './components/ProfessionalEcperience/ProfessionalExperience';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import NiceName from './components/Animations/NiceName'

function App() {
  return (
    <>
      <Menu />
      <MainBanner />
      <Summary />
      <ProfessionalExperience />
      <div className='blue-slice'>
        <Education />
      </div>
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
