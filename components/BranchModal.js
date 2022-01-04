import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { open_branch_Modal, getRequest, emInfo } from '../store/states'
import axios from 'axios';
import { useState,Fragment, useRef } from 'react';
import swal from 'sweetalert';
import { useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react'


const baseUrl = process.env.NEXT_PUBLIC_HOST;
const brCreatURL = baseUrl + 'hr/create-branch'
const hrURL = baseUrl + 'hr/'
const brURL = hrURL + 'branch'
const dpURL = hrURL + 'department'

const BranchModal = () => {


    const [selectedFile, setSelectedFile] = useState("https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=20&m=1214428300&s=170667a&w=0&h=NPyJe8rXdOnLZDSSCdLvLWOtIeC9HjbWFIx8wg5nIks=");
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
            token: state.stateReducer.token,
            open_branch_form: state.stateReducer.open_branch_form,
            addorupdate: state.stateReducer.addorupdate,
            departments: state.stateReducer.departments,
            branches: state.stateReducer.branches,
            data: state.stateReducer.data,
            emInfo: state.stateReducer.emInfo,
        }
    });
    useEffect(() => {
        setSelectedFile(state.emInfo.Personal_Picture || selectedFile)
    }, [selectedFile])



    const config = {
        headers: { "Authorization": `Bearer ${state.token.token.access}` }
    }
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let emID = `${year}${month < 10 ? `0${month}` : `${month}`}${date < 10 ? `0${date}` : `${date}`}${state.data.payload.at(-1).id + 1}`

    const submitHandler = (e) => {
        e.preventDefault();
        let info = {}
        info = {
            branch_manager: e.target.branch_manager.value,
            name: e.target.name.value,
            phone: e.target.phone.value,
            turnover: e.target.turnover.value,
            city: e.target.city.value,
            country: e.target.country.value,
            history: e.target.description.value
        }
        if (state.addorupdate == "add") {

            axios.post(brCreatURL, info, config).then(() => {
                swal("Good job!", "The data has been saved!", "success").then(() => {
                    dispatch(open_branch_Modal(false))
                    dispatch(getRequest(hrURL, brURL, dpURL, config))
                })
            })
        }
        else {
            axios.put(brURL + `/${state.emInfo.id}/update-delete/`, info, config).then(() => {
                swal("Good job!", "The data has been updated!", "success").then(() => {
                    dispatch(emInfo({}))
                    dispatch(getRequest(hrURL, brURL, dpURL, config))
                    dispatch(open_branch_Modal(false))
                })
            })
        }

    }

    const cancelButtonRef = useRef(null)

    return (

        <Transition.Root show={state.open_branch_form} as={Fragment} >
        <Dialog as="div" className="fixed z-50 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={() => {
            dispatch(open_branch_Modal(false))
        }}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
               <div className="inline-block bg-white max-h-[80vh] rounded-lg text-left overflow-x-auto shadow-xl transform transition-all sm:my-8 sm:align-middle w-[70vw] p-5">
                <div className="flex-col md:gap-6 ">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Add New Branch</h3>
                            <p className="mt-1 mb-0 text-sm text-gray-600">
                                This information will be displayed so be careful what you share.
                            </p>
                        </div>
                    </div>
                    <div className="mt-3 md:mt-0 md:col-span-2 md:grid-cols-2">
                        <form action="#" method="POST" onSubmit={submitHandler}>
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    {/* peronal information  */}
                                    <div className=" md:mt-0 md:col-span-2">
                                        {/* <form action="#" method="POST"> */}
                                        <div className="px-4 bg-white ">
                                            <div className="grid grid-cols-6 gap-6">

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                        Branch Manager
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="branch_manager"
                                                        id="branch_manager"
                                                        autoComplete="given-name"
                                                        className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md "
                                                        defaultValue={state.emInfo.branch_manager || ""}
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Branch name
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="name"
                                                        defaultValue={state.emInfo.name || ""}
                                                        id="name"
                                                        autoComplete="name"
                                                        className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                        Phone
                                                    </label>
                                                    <input
                                                        required
                                                        type=""
                                                        name="phone"
                                                        defaultValue={state.emInfo.phone || ""}
                                                        id="phone"
                                                        autoComplete="phone"
                                                        className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">
                                                        Turnover
                                                    </label>
                                                    <input
                                                        type=""
                                                        required
                                                        name="turnover"
                                                        defaultValue={state.emInfo.turnover || ""}
                                                        id="turnover"
                                                        autoComplete="turnover"
                                                        className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md"
                                                    />
                                                </div>


                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                                    Country
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="country"
                                                        name="country"
                                                        defaultValue={state.emInfo.country || ""}
                                                        autoComplete="country"
                                                        className="border-1 border-violet-600 mt-1 block w-full py-2 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        
                                                    </input>
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                                    City
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="city"
                                                        name="city"
                                                        defaultValue={state.emInfo.city || ""}
                                                        autoComplete="city"
                                                        className="border-1 border-violet-600 mt-1 block w-full py-2 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        
                                                    </input>
                                                </div>


                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="Work_type" className="block text-sm font-medium text-gray-700">
                                                        Description
                                                    </label>
                                                    <textarea 
                                                        rows="8" 
                                                        cols="50"
                                                        id="description"
                                                        name="description"
                                                        defaultValue={state.emInfo.history || ""}
                                                        autoComplete="description"
                                                        className="border-1 border-violet-600 mt-1 block w-full py-2 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >

                                                    </textarea >
                                                </div>
                                            </div>


                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">

                                                {
                                                    state.addorupdate == 'add' &&
                                                    <button
                                                        type="submit"
                                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    // onClick={saveHandler}
                                                    >Save
                                                    </button>
                                                }
                                                {
                                                    state.addorupdate == 'update' &&
                                                    <button
                                                        type="submit"
                                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    // onClick={() => dispatch(openModel(false))}
                                                    >Update
                                                    </button>
                                                }

                                                <button
                                                    type="button"
                                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                    onClick={() => {
                                                        dispatch(emInfo({}))
                                                        dispatch(open_branch_Modal(false))
                                                    }}
                                                >Cancel
                                                </button>
                                            </div>

                                        </div>
                                        {/* </form> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                </Transition.Child>
            </div>
        </Dialog>
    </Transition.Root>

        


    
            
        
    )
}

export default BranchModal
