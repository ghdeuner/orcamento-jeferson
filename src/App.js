import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from "./components/Header/Header"
import Home from "./Pages/Home/Home"
import Sobre from "./Pages/Sobre/Sobre"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Dashboard from './Pages/Dashboard/Dashboard';
import { useAppContext } from './context/AppContext';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAppContext();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/sobre" element={<PrivateRoute><Sobre /></PrivateRoute>} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;