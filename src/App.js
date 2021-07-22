import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useSound from 'use-sound'

import { GlobalProvider } from './context/GlobalContext'
import ScrollToTop from './components/ScrollToTop'
import wannabe from './assets/spice_girls_wannabe.mp3'

import Welcome from './pages/Welcome'
import CatchySong from './pages/CatchySong'
import ButReally from './pages/ButReally'
import Why from './pages/Why'
import Learn from './pages/Learn'
import LearnMore from './pages/LearnMore'
import WhatIHaveDone from './pages/WhatIHaveDone'
import Profile from './pages/Profile'

export default function App() {
  const [play, { sound, stop }] = useSound(wannabe)

  return (
    <GlobalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/catchy-song"
            element={<CatchySong play={play} sound={sound} stop={stop} />}
          />
          <Route path="/but-really" element={<ButReally />} />
          <Route path="/why" element={<Why />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/what-i-have-done" element={<WhatIHaveDone />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}
