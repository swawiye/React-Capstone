import './Style.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <nav className='navbar'>
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        <NavLink className="nav-link" to="/login">Log In</NavLink>
      </nav>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
