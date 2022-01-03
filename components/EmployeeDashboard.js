import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDoorOpen,faPenAlt, faCalendarAlt, faUser, faHandHoldingUsd, faLeaf, faRegistered } from '@fortawesome/free-solid-svg-icons'
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
        dispatch(getRequest(emURL + `${decodedPayload.user_id}`, brURL, dpURL, config))
    }, [state.data.data])

    const RightSide = (load) => {
        dispatch(rightSide(load))
    }
    return (
        <>
            {state.data.payload && <div className='flex mb-10'>
                {/* Left Side */}
                <div className='z-50 w-1/4 sticky top-0 h-[600px]'>
                    {/* Home */}
                    <div className='py-3 bg-gray-100 -mt-4 ml-10 px-10 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                        <p className='m-0'>Home / {state.rightside}</p>
                        <h4 className='m-0'> Employees Dashboard</h4>
                    </div>
                    {/* employee profile */}
                    <div className='py-3 bg-gray-100 mt-4 ml-10 px-10 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                        {state.data.payload && <img src={state.data.payload.Personal_Picture} alt="" className="w-[100px] h-[100px] bg-center bg-cover rounded-full mx-auto " />}
                        <p className='font-bold whitespace-nowrap'>Welcome {state.data.payload.first_name + ' ' + state.data.payload.last_name}</p>
                    </div>

                    {/* buttons */}
                    <div className='flex flex-wrap py-3 bg-gray-100 mt-4 ml-10 px-10 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                        <button autoFocus onClick={() => RightSide("Dashboard")} className='w-1/2 py-2 text-center bg-gray-100 border-2 focus:bg-yellow-400 hover:bg-yellow-400 rounded-tl-md'><FontAwesomeIcon className='block mx-auto text-gray-800' icon={faHome} style={{ width: "30px", height: '30px' }} />Dashboard</button>
                        <button onClick={() => RightSide("Calendar")} className='w-1/2 py-2 text-center border-2  focus:bg-yellow-400 hover:bg-yellow-400'><FontAwesomeIcon className='block mx-auto text-gray-800' icon={faCalendarAlt} style={{ width: "30px", height: '30px' }} />Calendar</button>
                        <button onClick={() => RightSide("Profile")} className='w-full py-2 text-center border-2 focus:bg-yellow-400 hover:bg-yellow-400 rounded-b-md'><FontAwesomeIcon className='block mx-auto text-gray-800' icon={faUser} style={{ width: "30px", height: '30px' }} />Profile</button>

                    </div>
                </div>

                {/* Right Side */}
                {
                    state.rightside == "Dashboard" &&
                    <div className='w-3/4 mx-auto'>
                        {/* Employee Info Card */}
                        <div className='w-11/12 mx-auto mt-4 '>
                            <div className='py-3 bg-gray-100 mt-4 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                                <div className='flex w-11/12 mx-auto '>
                                    <div className='flex w-4/12 '>
                                        <h5 className='w-1/3 text-left shadow-inner'> Branch : </h5>
                                        <p className='w-2/3 px-2 text-left'> Irbid</p>
                                    </div>
                                    <div className='flex w-4/12 '>
                                        <h5 className='text-left shadow-inner'> Department: </h5>
                                        <p className='w-2/3 px-2 text-left'> Network Department</p>
                                    </div>
                                    <div className='flex w-4/12 '>

                                        <h5 className='text-left shadow-inner'> Position : </h5>
                                        <p className='w-2/3 px-2 text-left'> Network Engineer</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='mx-auto my-3 w-72 h-72'>
                                    <h4 className='text-left shadow-inner'> Bio </h4>
                                    <p>describtion of employee job </p>
                                </div>
                            </div>

                        </div>
                        {/* Second Row */}
                        <div className='w-11/12 flex my-4 mx-auto justify-between'>
                        {/* permission */}
                            <div className='w-1/2' style={{width:'47%'}}>
                                <div className=' py-3 bg-gray-100 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                                    <span className='py-2 text-center hover:bg-yellow-400 '><FontAwesomeIcon className='w-1/4 mx-auto mt-1 text-gray-800' icon={faPenAlt} style={{ width: "30px", height: '30px' }} />Permission</span>
                                    <hr />
                                    <div className='list-disc'>
                                        <span type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"> 9:00 Hrs </span>
                                        <p> Approved</p>
                                        <span> 10:00 Hrs </span>
                                        <p> Remaining</p>

                                    </div>
                                </div>
                            </div>
                            {/* leaves */}
                            <div className='py-3 my-auto bg-gray-100 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center' style={{width:'47%'}}>
                                <div className='py-2 my-auto text-center hover:bg-yellow-400'>
                                    <FontAwesomeIcon className='w-1/4 my-auto mx-auto mt-1 text-gray-800' icon={faDoorOpen} style={{ width: "30px", height: '30px' }} />Leaves</div>
                                <hr />
                                <div className='list-disc'>
                                    <span type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"> 3 Days </span>
                                    <p> Taken</p>
                                    <span> 12 Days </span>
                                    <p> Remaining</p>

                                </div>
                            </div>
                        </div>
                        {/* salary slip */}
                        <div className=' mx-auto py-3 bg-gray-100 mt-3 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center' style={{width:'47%'}}>

                            <button className='w-1/4 py-2 text-center hover:bg-yellow-400'><FontAwesomeIcon className='w-1/4 mx-auto mt-1 text-gray-800' icon={faHandHoldingUsd} style={{ width: "30px", height: '30px' }} />Salary Slip</button>

                        </div>


                    </div>
                }

                {
                    state.rightside == "Calendar" &&
                    <h1>No</h1>
                }

            </div>}
        </>

    )
}

export default EmployeeDashBoard 