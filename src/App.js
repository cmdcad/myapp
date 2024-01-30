import logo from './logo.svg';
import './App.css';
import Onboarding from './Onboarding'
import Home from './Home'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main> <Routes>
        <Route path='' element={<Onboarding />} />
    <Route path='/Home' element={<Home/>}/>
      </Routes></main>
    </div>
  );
}

export default App;
