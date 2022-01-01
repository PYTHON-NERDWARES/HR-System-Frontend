import React from 'react'
import Image from 'next/image'
import headerLogo from '../assets/finallogo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faBuilding, faCalendarAlt, faUser, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import p from '../assets/p.jpg'
import EmployeeInfoTable from './EmployeInfoTable';


const DashBoard = () => {
    return (
        <div className='flex mb-10'>
            {/* Left Side */}
            <div className='z-50 w-1/4 sticky top-0 h-[600px]'>
                {/* Home */}
                <div className='py-3 bg-gray-100 -mt-4 ml-10 px-10 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                    <p className='m-0'>Home / Dashboard</p>
                    <h4 className='m-0'> HR Dashboard</h4>
                </div>

                {/* Admin profile */}
                <div className='py-3 bg-gray-100 mt-4 ml-10 px-10 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                    <Image src={headerLogo} alt="" className="bg-cover bg-center" width={100} height={120} />
                    <p className='font-bold'>Welcome Admin</p>
                </div>

                {/* buttons */}
                <div className='flex flex-wrap py-3 bg-gray-100 mt-4 ml-10 px-10 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                    <button className='py-2 border-2 w-1/2 hover:bg-yellow-400 text-center rounded-tl-md'><FontAwesomeIcon className='text-gray-800 mx-auto' icon={faHome} style={{ width: "30px", height: '30px' }} />Dashboard</button>
                    <button className='py-2 border-2 w-1/2 hover:bg-yellow-400 text-center rounded-tr-md'><FontAwesomeIcon className='text-gray-800 mx-auto' icon={faUsers} style={{ width: "30px", height: '30px' }} />Employees</button>
                    <button className='py-2 border-2 w-1/2 hover:bg-yellow-400 text-center'><FontAwesomeIcon className='text-gray-800 mx-auto' icon={faBuilding} style={{ width: "30px", height: '30px' }} />Companies</button>
                    <button className='py-2 border-2 w-1/2 hover:bg-yellow-400 text-center'><FontAwesomeIcon className='text-gray-800 mx-auto' icon={faCalendarAlt} style={{ width: "30px", height: '30px' }} />Calendar</button>
                    <button className='py-2 border-2 w-full hover:bg-yellow-400 text-center rounded-b-md'><FontAwesomeIcon className='text-gray-800 mx-auto' icon={faUser} style={{ width: "30px", height: '30px' }} />Profile</button>
                </div>
            </div>

            {/* Right Side */}
            <div className='w-3/4'>
                {/* First Row */}

                {/* Second Row */}
                <div className='flex justify-evenly'>
                    {/* Basic info */}
                    <div className='py-3 bg-gray-100 mt-4 w-5/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                        <div className='w-11/12 mx-auto '>
                            <h3 className='text-left'>Basic Info:</h3>
                        </div>
                        <hr />
                        <div className=' mx-auto my-3'>
                            {/* < EmployeeInfoTable /> */}
                            <div className='overflow-y-auto h-[300px]'>
                                <div className='w-11/12 mx-auto my-3 text-left'>
                                    <div className='flex'>
                                        <div className='flex w-8/12'>
                                            <p className=' my-auto ml-3 font-bold'>Full Name: </p>
                                        </div>
                                        <p className='w-1/3 font-bold my-auto'>Ahmad Abdul Ghafour</p>
                                    </div>
                                    <hr />
                                    <div className='flex'>
                                        <div className='flex w-8/12'>
                                            <p className=' my-auto ml-3 font-bold'>Social Status: </p>
                                        </div>
                                        <p className='w-1/3 font-bold my-auto'>Married</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <p className=' my-auto ml-3 font-bold'>Position: </p>
                                    </div>
                                    <p className='w-1/3 font-bold my-auto'>Software Engineer </p>
                                </div>
                                <hr />
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <p className=' my-auto ml-3 font-bold'>Birthday: </p>
                                    </div>
                                    <p className='w-1/3 font-bold my-auto'>1/1/1985 </p>
                                </div>
                                <hr />
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <p className=' my-auto ml-3 font-bold'>National ID / passport No: </p>
                                    </div>
                                    <p className='w-1/3 font-bold my-auto'>9855588548 </p>
                                </div>
                                <hr />
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <p className=' my-auto ml-3 font-bold'>Address: </p>
                                    </div>
                                    <p className='w-1/3 font-bold my-auto'>Amman - Abu nsair - Bno.25 </p>
                                </div>
                                <hr />
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <p className=' my-auto ml-3 font-bold'>Nationality: </p>
                                    </div>
                                    <p className='w-1/3 font-bold my-auto'>Syrian </p>
                                </div>




                            </div>

                        </div>
                    </div>
                    {/* Contacts */}
                    <div className='py-3 bg-gray-100 mt-4 w-5/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                        <div className='w-11/12 mx-auto '>
                            <h3 className='text-left'>Contacts:</h3>
                        </div>
                        <hr />
                       
                        <div className='overflow-y-auto h-[300px]'>
                            <div className='w-11/12 mx-auto my-3 text-left'>
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <p className=' my-auto ml-3 font-bold'>Mobile No:</p>
                                    </div>
                                    <p className='w-1/3 font-bold my-auto'>07855555255</p>
                                </div>
                                <hr />
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <p className=' my-auto ml-3 font-bold'>Email Address:</p>
                                    </div>
                                    <p className='w-1/3 font-bold my-auto'>A_ghafour@flawless.com</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex'>
                                <div className='flex w-8/12'>
                                    <p className=' my-auto ml-3 font-bold'>Emergency phone:</p>
                                </div>
                                <p className='w-1/3 font-bold my-auto'>079586425855</p>
                            </div>
                        </div>
                        </div>
                        </div>
                            {/* Dates */}
                            <div div className='flex w-auto ml-20 px-15'>
                            <div className='py-3 bg-gray-100 mt-4 w-5/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                                <div className='w-11/12 mx-auto '>
                                    <h3 className='text-left'>Dates:</h3>
                                </div>
                                <hr />
                                <div className='overflow-y-auto h-[300px]'>
                                    <div className='w-11/12 mx-auto my-3 text-left'>
                                        <div className='flex'>
                                            <div className='flex w-8/12'>
                                                <p className=' my-auto ml-3 font-bold'>Date 1:</p>
                                            </div>
                                            <p className='w-1/3 font-bold my-auto'>#####</p>
                                        </div>
                                        <hr />
                                        <div className='flex'>
                                            <div className='flex w-8/12'>
                                                <p className=' my-auto ml-3 font-bold'>Date 2:</p>
                                            </div>
                                            <p className='w-1/3 font-bold my-auto'>#######</p>
                                        </div>
                                    <hr />
                                    <div className='flex'>
                                        <div className='flex w-8/12'>
                                            <p className=' my-auto ml-3 font-bold'> Date 3:</p>
                                        </div>
                                        <p className='w-1/3 font-bold my-auto'>######</p>
                                    </div>

                                  </div>



                                </div>


                            </div>
                            </div>
                    </div>


                </div>
                )
}

                export default DashBoard
