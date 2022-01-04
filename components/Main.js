import React from 'react'
import DashBoard from './dashboard'
import EmployeeDashBoard from './EmployeeDashboard'
import EmployeesDetails from './EmployeesDetails'
import Branch from './Branch'
// import Form from './EmployeeForm'
import Testform from './Testform'
import New from './New'
import EmployeesPage from './EmployeesPage'
import Footer from './Footer'
import Header from './Header'

const Main = () => {
    
    return (
        <>
        <Header />
        {/* <EmployeesPage/> */}
        {/* <EmployeeDashBoard/> */}
        
        <EmployeesDetails/>
        {/* <Branch/> */}
        {/* <Form/> */}
        {/* <Testform/> */}

        {/* <New /> */}

        <Footer />
        </>
    )
}

export default Main