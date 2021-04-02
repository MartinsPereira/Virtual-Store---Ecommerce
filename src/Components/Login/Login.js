import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import './Login.css'
import Footer from '../Home/Footer';

const Login = () => {
  return (
    <>
    <section className="login-section">
      <div>
        <div className="login-section-image">
        </div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Login
