import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Home from './Components/Hero';


const Approutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            </Routes>
    </div>
  )
}

export default Approutes