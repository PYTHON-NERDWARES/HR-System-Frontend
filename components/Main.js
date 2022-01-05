import React from 'react'
import DashBoard from './dashboard'
import Footer from './Footer'
import Header from './Header'
import jsonwebtoken from 'jsonwebtoken';
import { useSelector, useDispatch } from 'react-redux';
import EmployeeDashBoard from './EmployeeDashboard'
import ManagerDashboard from './managerdashboard';
import AboutUS from './AboutUs';







const Main = () => {


    const state = useSelector((state) => {
        return {
            token: state.stateReducer.token,
            aboutus: state.stateReducer.aboutus,
        }
    });
    let decodedPayload = jsonwebtoken.decode(state.token.token.access)
    return (
        <>
            <Header />
            {
                state.aboutus &&
                <AboutUS/>
            }
            {!state.aboutus &&

                <div>
                    {decodedPayload.role == 'HR' && <DashBoard />}
                    {decodedPayload.role == 'Branch Manager' && <ManagerDashboard />}
                    {decodedPayload.role != 'Branch Manager' && decodedPayload.role != 'HR' && <EmployeeDashBoard />}
                </div>

            }
            <Footer />
        </>
    )
}

export default Main