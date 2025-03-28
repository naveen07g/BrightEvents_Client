// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';

import BusinessSignUp from './components/BusinessSignUp/BusinessSignUp';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';



function App() {
  // const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
      <Routes>
        {/* Default Route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <ImageCarousel />
              <Categories />
            </>
          }
        />
        {/* Business Sign-Up Route */}
        <Route path="/BusinessSignup" element={<BusinessSignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
