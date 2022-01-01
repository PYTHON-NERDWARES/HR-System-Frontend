import React from 'react'
import DashBoard from './dashboard'
import Footer from './Footer'
import Header from './Header'
import jsonwebtoken from 'jsonwebtoken';
import { useSelector } from 'react-redux';
import EmployeeDashBoard from './EmployeeDashboard';



const Main = () => {
    const state = useSelector((state) => {
        return {
          token: state.stateReducer.token,
        }
      });
    let decodedPayload = jsonwebtoken.decode(state.token.token.access)
    console.log(decodedPayload);
    return (
        <>
        <Header />
        {
            decodedPayload.role == 'HR' ? <DashBoard /> : <EmployeeDashBoard/>
        }
        <Footer />
        </>
    )
}

export default Main