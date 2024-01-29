import logo from './logo.svg';
import './App.css';
import Onboarding from './Onboarding'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main> <Routes>
        <Route path='' element={<Onboarding />} />
      </Routes></main>

    </div>
  );
}

export default App;
