import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Agentation } from 'agentation';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'instant' });
    }
  }, [pathname, hash]);
  return null;
}
import LangBanner from './components/LangBanner';
import Hero from './components/Hero';
import About from './components/About';
import CookieConsent from './components/CookieConsent';
import EditionSection from './components/EditionSection';
import PatronsSection from './components/PatronsSection';
import MediaSection from './components/MediaSection';
import RegistrationCTA from './components/RegistrationCTA';
import PhotoCarousel from './components/PhotoCarousel';
import ProgramAnnouncement from './components/ProgramAnnouncement';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { useTranslation } from 'react-i18next';
import {
  speakerBase2024, speakerBase2025,
  highlightIcons2024, highlightIcons2025,
} from './data/content';

function Home() {
  const { t } = useTranslation();
  const e2025 = t('editions.e2025', { returnObjects: true });
  const e2024 = t('editions.e2024', { returnObjects: true });

  const speakers2025   = speakerBase2025.map((s, i) => ({ ...s, ...e2025.speakers[i] }));
  const speakers2024   = speakerBase2024.map((s, i) => ({ ...s, ...e2024.speakers[i] }));
  const highlights2025 = e2025.highlights.map((h, i) => ({ ...h, icon: highlightIcons2025[i] }));
  const highlights2024 = e2024.highlights.map((h, i) => ({ ...h, icon: highlightIcons2024[i] }));

  return (
    <div>
      <Hero />
      <About />
      <ProgramAnnouncement />
      <div id="carousel" className="pt-10 pb-10 bg-white"><PhotoCarousel /></div>
      <div id="edycje">
        <EditionSection
          edition="2025"
          index={0}
          date={e2025.date}
          location="WSS Biała Podlaska"
          theme={e2025.theme}
          speakers={speakers2025}
          highlights={highlights2025}
          program={e2025.program}
          accent="pink"
          youtubeId="biGPhWaod5k"
        />
        <EditionSection
          edition="2024"
          index={1}
          date={e2024.date}
          location="WSS Biała Podlaska"
          theme={e2024.theme}
          speakers={speakers2024}
          highlights={highlights2024}
          program={e2024.program}
          accent="blue"
          youtubeId="s0Zw036BM5w"
          youtubeListId="PLo4-u68qkjwPxOJlq3H7zITSR3e-a304h"
        />
      </div>
      <MediaSection />
      <PatronsSection />
      <RegistrationCTA />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
    <ScrollToTop />
    <LangBanner />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
    </Routes>
    <CookieConsent />
    {import.meta.env.DEV && <Agentation />}
    </>
  );
}
