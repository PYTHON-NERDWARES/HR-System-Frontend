import React from 'react'
import Image from 'next/image'
import headerLogo from '../assets/finallogo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faBuilding, faCalendarAlt, faUser, faHandHoldingUsd , faLeaf , faRegistered } from '@fortawesome/free-solid-svg-icons'
import ChartApp from './pieChart';
import p from '../assets/p.jpg'
import AdminEventTable from './admineventtable';
import EmployeInfoTable from './EmployeInfoTable';



const EmployeeDashBoard = () => {
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
                {/* Employee Info Card */}
                <div className=' w-11/12 mx-auto mt-4'>
                <div className='py-3 bg-gray-100 mt-4 w-11/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                        <div className='flex w-11/12 mx-auto '>
                            <div  className='flex w-4/12 '>
                            <h3 className='shadow-inner text-left '> Branch : </h3>
                            </div>
                        </div>
                        <hr />
                        {/* <div className='w-72 h-72 mx-auto my-3'>
                            <h4 className='shadow-inner text-left'> Bio </h4>
                               <p>describtion of employee job </p>
                        </div> */}
                         <div className='w-11/12 mx-auto mt-4'>
                    <EmployeInfoTable />
                </div>
                    </div>

                    </div>
                </div>
            

        </div>
    )
}

export default EmployeeDashBoard 