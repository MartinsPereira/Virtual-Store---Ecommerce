import React from 'react'
import { Route, Routes } from 'react-router'
import DashboardHome from './DashboardHome'
import './Dashboard.css'
import HeaderDashboard from '../Header/HeaderDashboard'
import DashBoardProdutoCadastrar from './Produto/DashBoardProdutoCadastrar'

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div>
        <HeaderDashboard/>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/produto/cadastrar" element={<DashBoardProdutoCadastrar />} />
        </Routes>
      </div>
    </section>
  )
}

export default Dashboard
