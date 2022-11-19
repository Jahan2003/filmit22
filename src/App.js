import './App.css';
import ScrollToTop from './components/scroll';
import Movies from './components/movie';
import Bra from './pages/bra'
import In from './pages/in'
import Bc from './pages/bc';
import {Routes,Route} from 'react-router-dom'
;
function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Movies/>} />
   
   <Route path='/bra' element={<Bra/>}/>
   <Route path='/in' element={<In/>}/>
   <Route path='/bc' element={<Bc/>}/>
  
</Routes>
      
    </div>
  );
}

export default App;
