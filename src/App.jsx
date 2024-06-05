import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SkySports from './Components/SkySports';
import TenSports from './Components/TenSports';
import PtvSports from './Components/PtvSports';
import WillowSports from './Components/WillowSports';
import StarSports_1 from './Components/StarSports_1';
import Navbar from './Components/NavBar';
import Sports from './Components/Sports';


function App() {


  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Sports />}></Route>
            </Route>
            <Route path='/Sky-Sports' element={<SkySports />}></Route>
            <Route path='/Ten-Sports' element={<TenSports />}></Route>
            <Route path='/Ptv-Sports' element={<PtvSports />}></Route>
            <Route path='/Willow-Sports' element={<WillowSports />}></Route>
            <Route path='/Star-Sports' element={<StarSports_1 />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
