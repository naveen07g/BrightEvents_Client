// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import Home from '@mui/icons-material/Home';
import Banner from './components/Banner/Banner';

function App() {
  // const [count, setCount] = useState(0)

  return (      
      <BrowserRouter>
        <Header />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
  )
}

export default App
