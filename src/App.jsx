import { Routes, Route } from 'react-router-dom';
import { Agentation } from 'agentation';
import Hero from './components/Hero';
import About from './components/About';
import EditionSection from './components/EditionSection';
import OrganizerSection from './components/OrganizerSection';
import RegistrationCTA from './components/RegistrationCTA';
import PhotoCarousel from './components/PhotoCarousel';
import ProgramAnnouncement from './components/ProgramAnnouncement';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import {
  speakers2024, speakers2025,
  highlights2024, highlights2025,
  program2024, program2025,
} from './data/content';

function Home() {
  return (
    <div>
      <Hero />
      <PhotoCarousel />
      <About />
      <ProgramAnnouncement />
      <div id="edycje">
        <EditionSection
          edition="2025"
          index={0}
          date="23–24 października 2025"
          location="WSS Biała Podlaska"
          theme="PFA II gen., ablacja VT, mapowanie epikardialne"
          speakers={speakers2025}
          highlights={highlights2025}
          program={program2025}
          accent="pink"
        />
        <EditionSection
          edition="2024"
          index={1}
          date="3–4 października 2024"
          location="WSS Biała Podlaska"
          theme="Mapowanie 3D i złożone ablacje RF"
          speakers={speakers2024}
          highlights={highlights2024}
          program={program2024}
          accent="blue"
        />
      </div>
      <OrganizerSection />
      <RegistrationCTA />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
    {import.meta.env.DEV && <Agentation endpoint="http://localhost:4747" />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Gallery />} />
    </Routes>
    </>
  );
}
