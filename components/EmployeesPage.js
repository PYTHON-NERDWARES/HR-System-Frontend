import React from 'react'
import Image from 'next/image'
import headerLogo from '../assets/finallogo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faBuilding, faCalendarAlt, faUser, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import p from '../assets/p.jpg'



const EmployeesPage = () => {
    return (
        <div className='flex mb-10'>
            {/* Left Side */}
            <div className='z-50 w-1/4 sticky top-0 h-[600px]'>

                {/* Admin profile */}
                <div className='py-3 bg-gray-100 mt-4 ml-10 px-10 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                    <Image src={p} alt="" className="bg-cover bg-center" width={100} height={120} />
                    <p className='font-bold'>Welcome Ahmad Abdul Ghafour</p>
                </div>

                {/* buttons */}
                <div className='flex flex-wrap py-3 bg-gray-100 mt-4 ml-10 px-10 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                    <button className='py-2 border-2 w-1/2 hover:bg-yellow-400 text-center rounded-tl-md'><FontAwesomeIcon className='text-gray-800 mx-auto' icon={faHome} style={{ width: "30px", height: '30px' }} />Dashboard</button>
                    <button className='py-2 border-2 w-1/2 hover:bg-yellow-400 text-center rounded-tr-md'><FontAwesomeIcon className='text-gray-800 mx-auto' icon={faUsers} style={{ width: "30px", height: '30px' }} />Employees</button>
                    <button className='py-2 border-2 w-1/2 hover:bg-yellow-400 text-center'><FontAwesomeIcon className='text-gray-800 mx-auto' icon={faBuilding} style={{ width: "30px", height: '30px' }} />Branches</button>
                    <button className='py-2 border-2 w-1/2 hover:bg-yellow-400 text-center'><FontAwesomeIcon className='text-gray-800 mx-auto' icon={faCalendarAlt} style={{ width: "30px", height: '30px' }} />Calendar</button>
                    <button className='py-2 border-2 w-full hover:bg-yellow-400 text-center rounded-b-md'><FontAwesomeIcon className='text-gray-800 mx-auto' icon={faUser} style={{ width: "30px", height: '30px' }} />Profile</button>
                </div>
            </div>

            {/* Right Side */}
            <div className='w-3/4'>
                {/* Add Employee */}

                <div className= 'flex'>
                    <button className='py-2 border-2 w-full hover:bg-yellow-400 text-center rounded-b-md'><FontAwesomeIcon className='text-gray-800 mx-auto' icon={faUser} style={{ width: "30px", height: '30px' }} />Add Employee</button>

                    <hr />
                </div>

                {/* Employees Card */}

                <div className='py-3 bg-gray-100 mt-4 w-11/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                        <div className='w-11/12 mx-auto '>
                            <h3 className='text-left'>Employees Cards</h3>
                        </div>
                        <hr />
                        {/* manager profile */}
                        <div className='overflow-y-auto h-[300px]'>
                            <div className='w-5/12  my-3 text-left'>
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <Image src={p} alt="" className="bg-cover bg-center rounded-full" width={50} height={50} />
                                        <p className=' my-auto ml-3 font-bold'>Ahmad Abdul Ghafour</p>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div className='w-5/12  my-3 text-left'>
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <Image src={p} alt="" className="bg-cover bg-center rounded-full" width={50} height={50} />
                                        <p className=' my-auto ml-3 font-bold'>Ahmad Abdul Ghafour</p>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div className='w-5/12  my-3 text-left'>
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <Image src={p} alt="" className="bg-cover bg-center rounded-full" width={50} height={50} />
                                        <p className=' my-auto ml-3 font-bold'>Ahmad Abdul Ghafour</p>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div className='w-5/12  my-3 text-left'>
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <Image src={p} alt="" className="bg-cover bg-center rounded-full" width={50} height={50} />
                                        <p className=' my-auto ml-3 font-bold'>Ahmad Abdul Ghafour</p>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div className='w-5/12  my-3 text-left'>
                                <div className='flex'>
                                    <div className='flex w-8/12'>
                                        <Image src={p} alt="" className="bg-cover bg-center rounded-full" width={50} height={50} />
                                        <p className=' my-auto ml-3 font-bold'>Ahmad Abdul Ghafour</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>

                
                        
                    

            </div>
            </div>


        </div>
    )
}

export default EmployeesPage



