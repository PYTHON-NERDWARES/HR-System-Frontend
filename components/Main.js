import React from 'react'
import DashBoard from './dashboard'
import EmployeeDashBoard from './EmployeeDashboard'
import EmployeesPage from './EmployeesPage'
import Footer from './Footer'
import Header from './Header'

const Main = () => {
    
    return (
        <>
        <Header />
        <EmployeesPage/>
        <Footer />
        </>
    )
}

export default Main