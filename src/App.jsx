import { Routes, Route } from 'react-router-dom';

import './App.css';
import Greetings from './components/Greetings';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Greetings />}/>
    </Routes>
  )
}

export default App
