import React from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faBuilding, faCalendarAlt, faUser, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import ChartApp from './pieChart';
import AdminEventTable from './admineventtable';
import { useSelector, useDispatch } from 'react-redux';
import { getRequest, rightSide } from '../store/states'
import jsonwebtoken from 'jsonwebtoken';
import EmployeesTable from './EmployeInfoTable'
import CreateModel from './createmodel';
import BranchInfoTable from './BranchInfoTable';



const baseUrl = process.env.NEXT_PUBLIC_HOST;
const hrURL = baseUrl + 'hr/'
const brURL = hrURL + 'branch'
const imURL = process.env.NEXT_PUBLIC_IMAGE_LINK
const dpURL = hrURL + 'department'



const DashBoard = () => {
    const dispatch = useDispatch();


    const state = useSelector((state) => {
        return {
            data: state.stateReducer.data,
            token: state.stateReducer.token,
            branches: state.stateReducer.branches,
            totalsalary: state.stateReducer.totalsalary,
            departments: state.stateReducer.departments,
            rightside: state.stateReducer.rightside,
            open: state.stateReducer.open
        }
    });
    let decodedPayload = jsonwebtoken.decode(state.token.token.access)
    const config = {
        headers: { "Authorization": `Bearer ${state.token.token.access}` }
    }


    useEffect(() => {
        dispatch(getRequest(hrURL, brURL, dpURL, config))
    }, [state.data.data])

    const RightSide = (load) => {
        dispatch(rightSide(load))
    }



    return (
        <>
            {state.data.payload &&
                <div className='flex mb-10'>
                    {state.open && <CreateModel />}
                    {/* Left Side */}
                    <div className='z-50 w-1/4 sticky top-0 h-[600px]'>
                        {/* Home */}
                        <div className='py-3 bg-gray-100 -mt-4 ml-10 px-10 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                            <p className='m-0'>Home / {state.rightside}</p>
                            <h4 className='m-0'> HR Dashboard</h4>
                        </div>

                        {/* Admin profile */}
                        <div className='py-3 bg-gray-100 mt-4 ml-10 px-10 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                            <img src={imURL + decodedPayload.Personal_Picture} alt="" className="mx-auto bg-center bg-cover rounded-full" style={{ width: '100px', height: '100px' }} />
                            <p className='font-bold'>Welcome {decodedPayload.first_name + ' ' + decodedPayload.last_name}</p>
                        </div>

                        {/* buttons */}
                        <div className='flex flex-wrap py-3 bg-gray-100 mt-4 ml-10 px-10 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                            {/* {
                        state.rightSide == "Dashboard" &&

                    } */}
                            <button autoFocus onClick={() => RightSide("Dashboard")} className='w-1/2 py-2 text-center bg-gray-100 border-2 focus:bg-yellow-400 hover:bg-yellow-400 rounded-tl-md'><FontAwesomeIcon className='block mx-auto text-gray-800' icon={faHome} style={{ width: "30px", height: '30px' }} />Dashboard</button>
                            <button onClick={() => RightSide("Employees")} className='w-1/2 py-2 text-center border-2 focus:bg-yellow-400 hover:bg-yellow-400 rounded-tr-md'><FontAwesomeIcon className='block mx-auto text-gray-800' icon={faUsers} style={{ width: "30px", height: '30px' }} />Employees</button>
                            <button onClick={() => RightSide("Branchs")} className='w-1/2 py-2 text-center border-2 focus:bg-yellow-400 hover:bg-yellow-400'><FontAwesomeIcon className='block mx-auto text-gray-800' icon={faBuilding} style={{ width: "30px", height: '30px' }} />Branches</button>
                            <button onClick={() => RightSide("Calendar")} className='w-1/2 py-2 text-center border-2 focus:bg-yellow-400 hover:bg-yellow-400'><FontAwesomeIcon className='block mx-auto text-gray-800' icon={faCalendarAlt} style={{ width: "30px", height: '30px' }} />Calendar</button>
                            <button onClick={() => RightSide("Profile")} className='w-full py-2 text-center border-2 focus:bg-yellow-400 hover:bg-yellow-400 rounded-b-md'><FontAwesomeIcon className='block mx-auto text-gray-800' icon={faUser} style={{ width: "30px", height: '30px' }} />Profile</button>
                        </div>
                    </div>

                    {/* Right Side */}
                    {
                        state.rightside == "Dashboard" &&
                        <div className='w-3/4'>
                            {/* First Row */}
                            <div className='flex justify-evenly'>
                                {/* Employees */}
                                <div className='flex py-3 bg-yellow-400 mt-3  w-1/4 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                                    <div className='w-1/4'>
                                        <FontAwesomeIcon className='w-1/4 mx-auto mt-1 text-gray-800' icon={faUsers} style={{ width: "45px", height: '45px' }} />
                                    </div>
                                    <div className='w-3/4'>
                                        <p className='m-0 text-xl font-bold'>Employees</p>
                                        {
                                            state.data.payload &&
                                            <p className='m-0 font-bold'>{state.data.payload.length}</p>
                                        }
                                    </div>
                                </div>
                                {/* companies */}
                                <div className='flex py-3 bg-rose-600 mt-3  w-1/4 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                                    <div className='w-1/4'>
                                        <FontAwesomeIcon className='w-1/4 mx-auto mt-1 text-gray-800' icon={faBuilding} style={{ width: "45px", height: '45px' }} />
                                    </div>
                                    <div className='w-3/4'>
                                        <p className='m-0 text-xl font-bold'>Branches</p>
                                        {
                                            state.branches.branches &&
                                            <p className='m-0 font-bold'>{state.branches.branches.length}</p>
                                        }
                                    </div>
                                </div>
                                {/* Salary */}
                                <div className='flex py-3 bg-cyan-300 mt-3  w-1/4 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                                    <div className='w-1/4'>
                                        <FontAwesomeIcon className='w-1/4 mx-auto mt-1 text-gray-800' icon={faHandHoldingUsd} style={{ width: "45px", height: '45px' }} />
                                    </div>
                                    <div className='w-3/4'>
                                        <p className='m-0 text-xl font-bold'>Total Salary</p>
                                        {
                                            state.totalsalary.payload &&
                                            <p className='m-0 font-bold'>{state.totalsalary.payload} $</p>
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* Second Row */}
                            <div className='flex justify-evenly'>
                                {/* Debartment Chart */}
                                <div className='py-3 bg-gray-100 mt-4 w-5/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                                    <div className='w-11/12 mx-auto '>
                                        <h3 className='text-left'>Departments</h3>
                                    </div>
                                    <hr />
                                    <div className='mx-auto my-3 w-72 h-72'>
                                        {
                                            state.data.payload &&
                                            <ChartApp />
                                        }
                                    </div>
                                </div>
                                {/* Branches and Managers */}
                                <div className='py-3 bg-gray-100 mt-4 w-5/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                                    <div className='w-11/12 mx-auto '>
                                        <h3 className='text-left'>Managers & Branches</h3>
                                    </div>
                                    <hr />
                                    {/* manager profile */}
                                    <div className='overflow-y-auto h-[300px]'>
                                        {
                                            state.data.payload &&
                                            state.data.payload.map(element => {
                                                return (
                                                    element.role == 'Branch Manager' &&
                                                    <div>
                                                        <div className='w-11/12 mx-auto my-3 text-left'>
                                                            <div className='flex'>
                                                                <div className='flex w-8/12'>
                                                                    {
                                                                        element.Personal_Picture ?
                                                                            <img src={element.Personal_Picture} alt="" className="bg-center bg-cover rounded-full" style={{ width: '50px', height: '50px' }} />
                                                                            :
                                                                            <img src="" alt="" />
                                                                    }
                                                                    <p className='my-auto ml-3 font-bold '>{element.first_name + element.last_name}</p>
                                                                </div>
                                                                <p className='w-1/3 my-auto font-bold'>{element.branch} Branch</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                )
                                            })

                                        }



                                    </div>


                                </div>
                            </div>
                            {/* Table */}
                            <div className='w-11/12 mx-auto mt-4'>
                                <AdminEventTable />
                            </div>
                        </div>
                    }

                    {
                        state.rightside == "Employees" &&
                        <EmployeesTable />
                    }


                    {
                        state.rightside == "Branchs" &&
                        <BranchInfoTable />
                    }



                </div>}
        </>
    )
}

export default DashBoard
