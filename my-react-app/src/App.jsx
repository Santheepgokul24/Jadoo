import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Bookings from './Pages/Bookings';
import Destinations from './Pages/Destinations';
import Hotels from './Pages/Hotels';
import Login from './Pages/Login';
import Flights from './Pages/Flights';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<> <HomePage /> </>}></Route>
          <Route path='/Destinations' element={<><Destinations /></>}></Route>
          <Route path='/Hotels' element={<><Hotels /></>}></Route>
          <Route path='/Flights' element={<><Flights /></>}></Route>
          <Route path='/Bookings' element={<><Bookings /></>}></Route>
          <Route path='/Login' element={<><Login /></>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
