import React from 'react'
import Image from 'next/image'
import headerLogo from '../assets/finallogo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faBuilding, faCalendarAlt, faUser, faHandHoldingUsd, faLeaf, faRegistered } from '@fortawesome/free-solid-svg-icons'
import ChartApp from './pieChart';
import p from '../assets/p.jpg'
import AdminEventTable from './admineventtable';
import { useSelector, useDispatch } from 'react-redux';
import { getRequest, rightSide } from '../store/states'
import jsonwebtoken from 'jsonwebtoken';
import { useEffect } from 'react';



const baseUrl = process.env.NEXT_PUBLIC_HOST;
const emURL = baseUrl + 'hr/'
const brURL = emURL + 'branch'
const imURL = process.env.NEXT_PUBLIC_IMAGE_LINK
const dpURL = emURL + 'department'

const EmployeeDashBoard = () => {

    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return {
            data: state.stateReducer.data,
            token: state.stateReducer.token,
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
        console.log(decodedPayload.user_id);
        dispatch(getRequest(emURL + `${decodedPayload.user_id}`, brURL, dpURL, config))
    }, [state.data.data])

    const RightSide = (load) => {
        dispatch(rightSide(load))
    }
    return (
        <div className='flex mb-10'>
            {/* Left Side */}
            <div className='z-50 w-1/4 sticky top-0 h-[600px]'>
                {/* Home */}
                <div className='py-3 bg-gray-100 -mt-4 ml-10 px-10 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                    <p className='m-0'>Home / {state.rightside}</p>
                    <h4 className='m-0'> Employees Dashboard</h4>
                </div>
                {/* employee profile */}
                <div className='py-3 bg-gray-100 mt-4 ml-10 px-10 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                    <Image src={p} alt="" className="bg-cover bg-center" width={100} height={120} />
                    <p className='font-bold'>Welcome Ahmad Abdul Ghafour</p>
                </div>

                {/* buttons */}
                <div className='flex flex-wrap py-3 bg-gray-100 mt-4 ml-10 px-10 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                    <button autoFocus onClick={() => RightSide("Dashboard")} className='focus:bg-yellow-400 bg-gray-100 py-2 border-2 w-1/2 hover:bg-yellow-400 text-center rounded-tl-md'><FontAwesomeIcon className='text-gray-800 mx-auto block' icon={faHome} style={{ width: "30px", height: '30px' }} />Dashboard</button>
                    <button onClick={() => RightSide("Calendar")} className='focus:bg-yellow-400 py-2 border-2 w-1/2 hover:bg-yellow-400 text-center'><FontAwesomeIcon className='text-gray-800 mx-auto block' icon={faCalendarAlt} style={{ width: "30px", height: '30px' }} />Calendar</button>
                    <button onClick={() => RightSide("Profile")} className='focus:bg-yellow-400 py-2 border-2 w-full hover:bg-yellow-400 text-center rounded-b-md'><FontAwesomeIcon className='text-gray-800 mx-auto block' icon={faUser} style={{ width: "30px", height: '30px' }} />Profile</button>

                </div>
            </div>

            {/* Right Side */}
            {
                state.rightside == "Dashboard" &&
                <div className='w-3/4'>
                    {/* Employee Info Card */}
                    <div className=' w-11/12 mx-auto mt-4'>
                        <div className='py-3 bg-gray-100 mt-4 w-11/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                            <div className='flex w-11/12 mx-auto '>
                                <div className='flex w-4/12 '>
                                    <h5 className='shadow-inner text-left w-1/3'> Branch : </h5>
                                    <p className='text-left px-2 w-2/3'> Irbid</p>
                                </div>
                                <div className='flex w-4/12 '>
                                    <h5 className='shadow-inner text-left'> Department: </h5>
                                    <p className='text-left px-2 w-2/3'> Network Department</p>
                                </div>
                                <div className='flex w-4/12 '>

                                    <h5 className='shadow-inner text-left'> Position : </h5>
                                    <p className='text-left px-2 w-2/3'> Network Engineer</p>
                                </div>
                            </div>
                            <hr />
                            <div className='w-72 h-72 mx-auto my-3'>
                                <h4 className='shadow-inner text-left'> Bio </h4>
                                <p>describtion of employee job </p>
                            </div>
                        </div>

                    </div>
                    {/* Second Row */}
                    {/* permission */}

                    <div className='w-3/4'>
                        <div className=' py-3 bg-gray-100 mt-3  w-8/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                            <span className='py-2 border-2  hover:bg-yellow-400 text-center '><FontAwesomeIcon className='text-gray-800 mx-auto' icon={faRegistered} style={{ width: "30px", height: '30px' }} />Permission</span>
                            <hr />
                            <div className='list-disc'>
                                <span type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"> 9:00 Hrs </span>
                                <p> Approved</p>
                                <span> 10:00 Hrs </span>
                                <p> Remaining</p>

                            </div>
                        </div>
                        {/* leaves */}
                        <div className='py-3 bg-gray-100 mt-3  w-3/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                            <span className='py-2 border-2  hover:bg-yellow-400 text-center'><FontAwesomeIcon className='text-gray-800 mx-auto' icon={faLeaf} style={{ width: "30px", height: '30px' }} />Leaves</span>
                            <hr />
                            <div className='list-disc'>
                                <span type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"> 3 Days </span>
                                <p> Taken</p>
                                <span> 12 Days </span>
                                <p> Remaining</p>

                            </div>
                        </div>
                        {/* salary slip */}
                        <div className=' py-3 bg-gray-100 mt-3  w-6/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>

                            <button className='py-2 border-2 w-1/4 hover:bg-yellow-400 text-center'><FontAwesomeIcon className='text-gray-800 mx-auto' icon={faHandHoldingUsd} style={{ width: "30px", height: '30px' }} />Salary Slip</button>

                        </div>
                    </div>

                </div>
            }

            {
                state.rightside == "Calendar" &&
                <h1>No</h1>
            }

        </div>
    )
}

export default EmployeeDashBoard 