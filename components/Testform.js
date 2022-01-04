import React from 'react'
import Image from 'next/image'
import headerLogo from '../assets/finallogo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faBuilding, faCalendarAlt, faUser, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import p from '../assets/p.jpg'
import EmployeeInfoTable from './EmployeInfoTable';
import { useSelector, useDispatch } from 'react-redux';
import { openModel , createUser } from '../store/states'
import axios from 'axios';
import { useState } from 'react';


const baseUrl = process.env.NEXT_PUBLIC_HOST;
const saveURL = baseUrl + 'hr/create-account'

const Testform = () => {
    const [selectedFile, setSelectedFile] = useState();
    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return {
            token:state.stateReducer.token,
            open: state.stateReducer.open,
            addorupdate: state.stateReducer.addorupdate
        }
    });

    const config = {
        headers: { "Authorization": `Bearer ${state.token.token.access}`}
    }

    
        // "Content-type": "multipart/form-data" 

    const submitHandler = (e) =>{

        e.preventDefault();
        console.log(selectedFile.name);
        const uploadData = new FormData()
        uploadData.append('title',selectedFile.name)
        uploadData.append('Image',selectedFile,selectedFile.name)
        console.log(uploadData);

        let info = {
            first_name:e.target.first_name.value,
            last_name:e.target.last_name.value, 
            email:e.target.email.value, 
            phone:e.target.phone.value, 
            role:e.target.role.value, 
            work_type:e.target.work_type.value, 
            experience:e.target.experience.value, 
            username:e.target.username.value, 
            password:e.target.password.value, 
            salary:e.target.salary.value, 
            gender:e.target.gender.value, 
            marital_status:e.target.marital_status.value, 
            nationality:e.target.nationality.value, 
            department:e.target.department.value, 
            branch:e.target.branch.value, 
            Personal_Picture:uploadData, 
        }
        console.log("form data: ",info);
        axios.post(saveURL, info , config).then((response) => {
            console.log('Everything is awesome.');
        }).catch((error) => {
            console.warn(error);
        })
        console.log(22222222,info);

        // dispatch(createUser(saveURL, info))

    }


    let roles = ['---', 'HR', 'Branch Manager', 'Department Manager', 'Software Engineer',
        'Senior Software Engineer', 'Full Stack Developer', 'FrontEnd Developer',
        'BackEnd Developer', 'Python Developer', 'UX Designer', 'UI Designer',
        'DOTnet Developer', 'Java Developer', 'Android Developer',
        'Mobile Developer', 'Project Development Manager',
        'Chief Operating Officer', 'Digital Marketing', 'Marketing Officer',
        'Marketing Officer', 'Databace Administrator', 'Quality Assurance',
        'Junior Frontend Developer', 'Trainee']
    let Nationalities = ['---', 'Afghan', 'Albanian', 'Algerian', 'Argentinian', 'Australian', 'Bangladeshi', 'Belgian', 'Bolivian', 'Batswana', 'Brazilian', 'Bulgarian', 'Cambodian', 'Cameroonian', 'Canadian', 'Chilean', 'Chinese', 'Colombian', 'Costa Rican', 'Croatian', 'Cuban', 'Czech', 'Danish', 'Dominican', 'Ecuadorian', 'Egyptian', 'Salvadorian', 'English', 'Estonian', 'Ethiopian', 'Fijian', 'Finnish', 'French', 'German', 'Ghanaian', 'Greek', 'Guatemalan', 'Haitian', 'Honduran', 'Hungarian', 'Icelandic', 'Indian', 'Indonesian', 'Iranian', 'Iraqi', 'Irish', 'Italian', 'Jamaican',
        'Japanese', 'Jordanian', 'Kenyan', 'Kuwaiti', 'Lao', 'Latvian', 'Lebanese', 'Libyan', 'Lithuanian', 'Malagasy', 'Malaysian', 'Malian',
        'Maltese', 'Mexican', 'Mongolian', 'Moroccan', 'Mozambican', 'Namibian', 'Nepalese', 'Dutch', 'New Zealand', 'Nicaraguan',
        'Nigerian', 'Norwegian', 'Pakistani', 'Panamanian', 'Paraguayan', 'Peruvian', 'Philippine',
        'Polish', 'Portuguese', 'Romanian', 'Russian', 'Saudi', 'Scottish', 'Senegalese', 'Serbian',
        'Singaporean', 'Slovak', 'South African', 'Korean', 'Spanish', 'Sri Lankan', 'Sudanese',
        'Swedish', 'Swiss', 'Syrian', 'Taiwanese', 'Tajikistani', 'Thai', 'Tongan', 'Tunisian', 'Turkish',
        'Ukrainian', 'Emirati', 'British', 'American', 'Uruguayan', 'Venezuelan', 'Vietnamese', 'Welsh', 'Zambian', 'Zimbabwean']
    return (
        <>
            <div>
                <div className="flex-col md:gap-6 ">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Add New Employee</h3>
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
                                                            First name
                                                        </label>
                                                        <input
                                                            required
                                                            type="text"
                                                            name="first_name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md "
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                            Last name
                                                        </label>
                                                        <input
                                                            required
                                                            type="text"
                                                            name="last_name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                            Email address
                                                        </label>
                                                        <input
                                                            required
                                                            type="text"
                                                            name="email"
                                                            id="email-address"
                                                            autoComplete="email"
                                                            className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">
                                                            Phone
                                                        </label>
                                                        <input
                                                            type=""
                                                            required
                                                            name="phone"
                                                            id="Phone"
                                                            autoComplete="Phone"
                                                            className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md"
                                                        />
                                                    </div>


                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                                            Role
                                                        </label>
                                                        <select
                                                            id="role"
                                                            name="role"
                                                            autoComplete="role-name"
                                                            className="border-1 border-violet-600 mt-1 block w-full py-2 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >
                                                            {
                                                                roles.map(role => {
                                                                    return (

                                                                        <option value={role} >{role}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>


                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="Work_type" className="block text-sm font-medium text-gray-700">
                                                            Work type
                                                        </label>
                                                        <select
                                                            id="Work_type"
                                                            name="work_type"
                                                            autoComplete="Work_type"
                                                            className="border-1 border-violet-600 mt-1 block w-full py-2 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >


                                                            <option>---</option>

                                                            <option value='On Site'>On Site</option>
                                                            <option value='Remote'>Remote</option>

                                                        </select>
                                                    </div>
                                                    <div className="col-span-6">
                                                        <label className="block text-sm font-medium text-gray-700">
                                                            Experience
                                                        </label>
                                                        <input
                                                            required
                                                            type="text"
                                                            name="experience"
                                                            id="Experience"
                                                            className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6">
                                                        <label className="block text-sm font-medium text-gray-700">
                                                            Username
                                                        </label>
                                                        <input
                                                            required
                                                            type="text"
                                                            name="username"
                                                            id="Username"
                                                            className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md"
                                                        />
                                                        <label className="block text-sm font-medium text-gray-700"> Password </label>
                                                        <input required name='password' className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md" type="password" />
                                                    </div>

                                                    <div className="col-span-6">
                                                        <label className="block text-sm font-medium text-gray-700">
                                                            Salary
                                                        </label>
                                                        <input
                                                            required
                                                            type="text"
                                                            name="salary"
                                                            id="Salary"
                                                            className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 ">
                                                        <label htmlFor="Gender" className="block text-sm font-medium text-gray-700">
                                                            Gender
                                                        </label>
                                                        <select
                                                            id="Gender"
                                                            name="gender"
                                                            autoComplete="Gender"
                                                            className="border-1 border-violet-600 mt-1 block w-full py-2 px-3  bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >


                                                            <option>---</option>

                                                            <option value='Male'>Male</option>
                                                            <option value='Female'>Female</option>

                                                        </select>
                                                    </div>
                                                    <div className="col-span-6 ">
                                                        <label htmlFor="Marital_status" className="block text-sm font-medium text-gray-700">
                                                            Marital status
                                                        </label>
                                                        <select
                                                            id="Marital_status"
                                                            name="marital_status"
                                                            autoComplete="Marital_status"
                                                            className="border-1 border-violet-600 mt-1 block w-full py-2 px-3  bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >


                                                            <option>---</option>

                                                            <option value='Single'>Single</option>
                                                            <option value='Married'>Married</option>

                                                        </select>
                                                    </div>
                                                    <div className="col-span-6 ">
                                                        <label htmlFor="Nationality" className="block text-sm font-medium text-gray-700">
                                                            Nationality
                                                        </label>
                                                        <select
                                                            id="Nationality"
                                                            name="nationality"
                                                            autoComplete="Nationality"
                                                            className="border-1 border-violet-600 mt-1 block w-full py-2 px-3  bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >
                                                            {
                                                                Nationalities.map(Nationality => {
                                                                    return (
                                                                            console.log(Nationality),
                                                                        <option value={Nationality}>{Nationality}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>

                                                    <div className="col-span-6 ">
                                                        <label htmlFor="Department" className="block text-sm font-medium text-gray-700">
                                                            Department
                                                        </label>
                                                        <select
                                                            id="Department"
                                                            name="department"
                                                            autoComplete="Department"
                                                            className="border-1 border-violet-600 mt-1 block w-full py-2 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >


                                                            <option>---</option>

                                                            <option value="1">Managment</option>
                                                            <option value="2">Development</option>
                                                            <option value='Testing'>Testing</option>
                                                            <option value='Quality'>Quality</option>

                                                        </select>
                                                    </div>

                                                    <div className="col-span-6 ">
                                                        <label htmlFor="Branch" className="block text-sm font-medium text-gray-700">
                                                            Branch
                                                        </label>
                                                        <select
                                                            id="Branch"
                                                            name="branch"
                                                            autoComplete="Branch"
                                                            className="border-1 border-violet-600 mt-1 block w-full py-2 px-3  bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >


                                                            <option>---</option>

                                                            <option value='1'>Amman</option>
                                                            <option value='2'>Irbid</option>
                                                            <option>----</option>
                                                            <option>----</option>

                                                        </select>
                                                    </div>

                                                    <div className="col-span-6 ">
                                                        <label className="block text-sm font-medium text-gray-700">Photo</label>
                                                        <div className="mt-1 flex items-center">
                                                            <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                                </svg>
                                                            </span>
                                                            <button
                                                                type="button"
                                                                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            >
                                                                Change
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-6 ">
                                                        <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                            <div className="space-y-1 text-center">
                                                                <svg
                                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    viewBox="0 0 48 48"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                                <div className="flex text-sm text-gray-600">
                                                                    <label
                                                                        htmlFor="file-upload"
                                                                        className="relative my-auto cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                                    >
                                                                        <span>Upload a file</span>
                                                                        <input required name='Personal_Picture' onChange={(e) => setSelectedFile(e.target.files[0])} id="file-upload" type="file" className="sr-only" />
                                                                    </label>
                                                                    <p className="pl-1 m-0">or drag and drop</p>
                                                                </div>
                                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                    {/* <button
                                                        type="submit"
                                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        Save
                                                    </button> */}

                                                    {
                                                        state.addorupdate == 'add' &&
                                                        <button
                                                            type="submit"
                                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            // onClick={() => dispatch(openModel(false))}
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
                                                        onClick={() => dispatch(openModel(false))}
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



        </>
    )
}


export default Testform  