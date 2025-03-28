// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './components/Header/Header';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import Categories from './components/Categories/Categories';



function App() {
  // const [count, setCount] = useState(0)

  return (      
      <BrowserRouter>
        <Header />
        <ImageCarousel />
        <Categories  />
        {/* <Banner /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
  )
}

export default App
