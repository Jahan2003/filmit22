import './App.css';
import Movies from './components/movie';
import Bra from './pages/bra'
import In from './pages/in'
import Bc from './pages/bc';
import {Routes,Route} from 'react-router-dom';
import Fc from './pages/fc'
import God from './pages/god'
import Inc from './pages/inc'
import Mat from './pages/mat'
import Nwh from './pages/nwh'
import Off from './pages/off'
import Shaw from './pages/shaw'
function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Movies/>} />
   <Route path='/bra' element={<Bra/>}/>
   <Route path='/in' element={<In/>}/>
   <Route path='/bc' element={<Bc/>}/>
   <Route path='/fc' element={<Fc/>}/>
   <Route path='/god' element={<God/>}/>
   <Route path='/inc' element={<Inc/>}/>
   <Route path='/mat' element={<Mat/>}/>
   <Route path='/nwh' element={<Nwh/>}/>
   <Route path='/off' element={<Off/>}/>
   <Route path='/shaw' element={<Shaw/>}/>
</Routes>
      
    </div>
  );
}

export default App;
