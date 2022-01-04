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
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Basic Information</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details .</p>
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Full Name: </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Malak khasawneh</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Social Status: </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">singel</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Position: </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Software Engineer</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Birthday: </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">27/4/1996</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">National ID / passport No: </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">9962008554</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Address: </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Irbid</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Nationality: </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Irbid</dd>
                                    </div>


                                    {/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Nationality: </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div> */}
                                </dl>
                            </div>
                        </div>

                    </div>
                    {/* Contacts */}
                    <div className='py-3 bg-gray-100 mt-4 w-5/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Contacts Information</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">Contacts Information details .</p>
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Mobile No: </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">07855555255</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Email Address: </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">A_ghafour@flawless.com</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Emergency phone: </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">079586425855</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Dates */}
                <div div className='flex w-auto ml-20 px-15'>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Dates Information</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Dates Information details .</p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Joined Date: </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">07/10/2021</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                     
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="active"
                                name="active"
                                type="checkbox"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="active" className="font-medium text-gray-700">
                                Active Status
                            </label>
                            <p className="text-gray-500">Still employee joined with us</p>
                        </div>
                    </div>
                    </div>


                </dl>
            </div>
        </div>
                </div>
            </div>


        </div>
    )
}

export default DashBoard




