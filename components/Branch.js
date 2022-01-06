import React from 'react'
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