import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SkySports from './Components/SkySports';
import TenSports from './Components/TenSports';
import PtvSports from './Components/PtvSports';
import WillowSports from './Components/WillowSports';
import StarSports_1 from './Components/StarSports_1';
import Navbar from './Components/NavBar';
import Sports from './Components/Sports';
import Arena from './Components/Arena';
import Football from './Components/Football';
import ActionSports from './Components/ActionSports';
import Forumla1 from './Components/Formula1';
import Tenis from './Components/Tenis';
import TNS from './Components/TNS';
import PremierLeague from './Components/PremierLeague';


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
            <Route path='/Star-Sports' element={<StarSports_1 />}></Route>
            <Route path='/Willow-Sports' element={<WillowSports />}></Route>
            <Route path='/SkySports-Arena' element={<Arena />}></Route>
            <Route path='/SkySports-Football' element={<Football />}></Route>
            <Route path='/SkySports-Actions' element={<ActionSports />}></Route>
            <Route path='/Sky-Sports-f1' element={<Forumla1 />}></Route>
            <Route path='/Sky-Sports-Tenis' element={<Tenis />}></Route>
            <Route path='/TSN-TSN' element={<TNS />}></Route>
            <Route path='/SkySports-PremierLeague' element={<PremierLeague />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
