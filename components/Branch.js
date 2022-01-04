import React from 'react'
import Image from 'next/image'
import headerLogo from '../assets/finallogo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faBuilding, faCalendarAlt, faUser, faHandHoldingUsd, faLeaf, faRegistered } from '@fortawesome/free-solid-svg-icons'
import ChartApp from './pieChart';
import p from '../assets/p.jpg'
import AdminEventTable from './admineventtable';
import EmployeInfoTable from './EmployeInfoTable';



const Branches = () => {
    return (



        <>
            <div className='w-3/4'>
                {/* Employee Info Card */}
                <div className=' w-11/12 mx-auto mt-4'>
                    <div className='py-3 bg-gray-100 mt-4 w-11/12 rounded-md shadow-[0_3px_15px_-4px_rgba(0,0,0,0.3)] text-center'>
                        <div className='flex w-11/12 mx-auto '>
                            <div className='flex w-4/12 '>
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
        </>


    )
}

export default Branches 