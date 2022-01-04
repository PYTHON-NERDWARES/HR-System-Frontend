import React from 'react'
import Image from 'next/image'
import headerLogo from '../assets/finallogo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faBuilding, faCalendarAlt, faUser, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import ChartApp from './pieChart';
import p from '../assets/p.jpg'
import AdminEventTable from './admineventtable';


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
                <div className='flex justify-evenly'>
                    {/* Employees */}
                    <div className='flex py-3 bg-yellow-400 mt-3  w-1/4 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                        <div className='w-1/4'>
                            <FontAwesomeIcon className='text-gray-800 w-1/4 mx-auto mt-1' icon={faUsers} style={{ width: "45px", height: '45px' }} />
                        </div>
                        <div className='w-3/4'>
                            <p className='m-0 font-bold text-xl'>Employees</p>
                            <p className='m-0 font-bold'>700</p>
                        </div>
                    </div>
                    {/* companies */}
                    <div className='flex py-3 bg-rose-600 mt-3  w-1/4 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                        <div className='w-1/4'>
                            <FontAwesomeIcon className='text-gray-800 w-1/4 mx-auto mt-1' icon={faBuilding} style={{ width: "45px", height: '45px' }} />
                        </div>
                        <div className='w-3/4'>
                            <p className='m-0 font-bold text-xl'>Companies</p>
                            <p className='m-0 font-bold'>30</p>
                        </div>
                    </div>
                    {/* Salary */}
                    <div className='flex py-3 bg-cyan-300 mt-3  w-1/4 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                        <div className='w-1/4'>
                            <FontAwesomeIcon className='text-gray-800 w-1/4 mx-auto mt-1' icon={faHandHoldingUsd} style={{ width: "45px", height: '45px' }} />
                        </div>
                        <div className='w-3/4'>
                            <p className='m-0 font-bold text-xl'>Total Salary</p>
                            <p className='m-0 font-bold'>500000$</p>
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
                        <div className='w-72 h-72 mx-auto my-3'>
                            <ChartApp />
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
                            <div className='w-11/12 mx-auto my-3 text-left'>
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <Image src={p} alt="" className="bg-cover bg-center rounded-full" width={50} height={50} />
                                        <p className=' my-auto ml-3 font-bold'>Ahmad Abdul Ghafour</p>
                                    </div>
                                    <p className='w-1/3 font-bold my-auto'>Al Zarqaa Branch</p>
                                </div>
                            </div>
                            <hr />

                            <div className='w-11/12 mx-auto my-3 text-left'>
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <Image src={p} alt="" className="bg-cover bg-center rounded-full" width={50} height={50} />
                                        <p className=' my-auto ml-3 font-bold'>Ahmad Abdul Ghafour</p>
                                    </div>
                                    <p className='w-1/3 font-bold my-auto'>Al Zarqaa Branch</p>
                                </div>
                            </div>
                            <hr />

                            <div className='w-11/12 mx-auto my-3 text-left'>
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <Image src={p} alt="" className="bg-cover bg-center rounded-full" width={50} height={50} />
                                        <p className=' my-auto ml-3 font-bold'>Ahmad Abdul Ghafour</p>
                                    </div>
                                    <p className='w-1/3 font-bold my-auto'>Al Zarqaa Branch</p>
                                </div>
                            </div>
                            <hr />

                            <div className='w-11/12 mx-auto my-3 text-left'>
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <Image src={p} alt="" className="bg-cover bg-center rounded-full" width={50} height={50} />
                                        <p className=' my-auto ml-3 font-bold'>Ahmad Abdul Ghafour</p>
                                    </div>
                                    <p className='w-1/3 font-bold my-auto'>Al Zarqaa Branch</p>
                                </div>
                            </div>
                            <hr />

                            <div className='w-11/12 mx-auto my-3 text-left'>
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <Image src={p} alt="" className="bg-cover bg-center rounded-full" width={50} height={50} />
                                        <p className=' my-auto ml-3 font-bold'>Ahmad Abdul Ghafour</p>
                                    </div>
                                    <p className='w-1/3 font-bold my-auto'>Al Zarqaa Branch</p>
                                </div>
                            </div>
                            <hr />
                        </div>


                    </div>
                </div>
                {/* Table */}
                <div className='w-11/12 mx-auto mt-4'>
                    <AdminEventTable />
                </div>
            </div>


        </div>
    )
}

export default DashBoard
