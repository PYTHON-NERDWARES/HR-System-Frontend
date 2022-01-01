import React from 'react'
import DashBoard from './dashboard'
import EmployeeDashBoard from './EmployeeDashboard'
import EmployeesDetails from './EmployeesDetails'
import Branch from './Branch'

import EmployeesPage from './EmployeesPage'
import Footer from './Footer'
import Header from './Header'

const Main = () => {
    
    return (
        <>
        <Header />
        {/* <EmployeesPage/> */}
        {/* <EmployeeDashBoard/> */}
        
        {/* <EmployeesDetails/> */}
        <Branch/>
        <Footer />
        </>
    )
}

export default Main