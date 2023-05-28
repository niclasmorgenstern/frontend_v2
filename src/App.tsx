import { Routes, Route } from 'react-router-dom';

import Login from './pages/Account/Login';
import Register from './pages/Account/Register';

import Home from './pages/Home';

function App() {

  return (
    <Routes>   
      {/* Public Routes */}      
      <Route path="/" element={<Home />}/>
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register />}/>
    </Routes>
  )
}

export default App
