import { useState, useEffect } from 'react';
import BrokenNav from './components/BrokenNav';
import ChaoticHero from './components/ChaoticHero';
import TypographyCrime from './components/TypographyCrime';
import LayoutDisaster from './components/LayoutDisaster';
import TextCorruption from './components/TextCorruption';
import UselessInteractions from './components/UselessInteractions';
import AbsoluteNonsense from './components/AbsoluteNonsense';
import ErrorPopups from './components/ErrorPopups';
import GlitchEffects from './components/GlitchEffects';
import BrokenFooter from './components/BrokenFooter';
import CursorEffect from './components/CursorEffect';
import BlueScreenOfChaos from './components/BlueScreenOfChaos';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [showBSOC, setShowBSOC] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setClickCount((prev) => {
        const newCount = prev + 1;
        if (newCount >= 5) {
          setShowBSOC(true);
          return 0;
        }
        return newCount;
      });
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <CursorEffect />
      <BrokenNav />
      <ChaoticHero />
      <TypographyCrime />
      <LayoutDisaster />
      <TextCorruption />
      <UselessInteractions />
      <AbsoluteNonsense />
      <GlitchEffects />
      <BrokenFooter />
      <ErrorPopups />

      {showBSOC && <BlueScreenOfChaos onClose={() => setShowBSOC(false)} />}
    </div>
  );
}

export default App;
