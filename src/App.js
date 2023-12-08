import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.js'
import SignUp from './pages/Signup.js';
import Home from './pages/Home.js';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
