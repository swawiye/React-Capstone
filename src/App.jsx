//Styling
import './Style.css';

//Connecting pages with react router
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

//Home page aftre you've logged in
import ExpenseForm from './components/ExpenseForm';

//Optimization before deployment
//import React, { Suspense } from 'react';

function App() {
  return (
    <Router>
      <nav className='navbar'>
        <NavLink className="logo" to="/">MoneyMinds</NavLink>
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/signup">Get Started</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/expenseform' element={<ExpenseForm />} />
      </Routes>
    </Router>
  );
}

export default App;
