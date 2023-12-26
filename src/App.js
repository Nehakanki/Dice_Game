
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Game from './Pages/Game';

function App() {
  return (
    <div className='  bg-slate-50 ' >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Game" element={<Game/>}/>
      </Routes>
    </div>
  );
}

export default App;
