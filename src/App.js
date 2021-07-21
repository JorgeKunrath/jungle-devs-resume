import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalProvider } from './context/GlobalContext'

import Welcome from './pages/Welcome'
import CatchySong from './pages/CatchySong'
import ButReally from './pages/ButReally'
import Why from './pages/Why'
import Learn from './pages/Learn'
import LearnMore from './pages/LearnMore'
import WhatIHaveDone from './pages/WhatIHaveDone'
import Profile from './pages/Profile'

export default function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/catchy-song" element={<CatchySong />} />
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
