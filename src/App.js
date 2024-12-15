import React from 'react';
import Dashboard from './pages/Dashboard';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Jurusan from './pages/Jurusan';
import { AuthProvider, useAuth } from './pages/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import Program from './pages/Program';
import Visi from './pages/Visi';
import Pendaftaran from './pages/Pendaftaran';
import Data from './pages/Data';

function PrivateRoute({ children }) {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...</div>; 
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

function App() {
    return (
        <AuthProvider>
            <div className="page-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/jurusan" element={<PrivateRoute><Jurusan /></PrivateRoute>} />
                    <Route path="/program" element={<PrivateRoute><Program /></PrivateRoute>} />
                    <Route path="/visi" element={<PrivateRoute><Visi /></PrivateRoute>} />
                    <Route path="/pendaftaran" element={<Pendaftaran/>}/>
                    <Route path="/data" element={<Data/>}/>
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;
