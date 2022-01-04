import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { openModel, createUser, getRequest, emInfo } from '../store/states'
import axios from 'axios';
import { useState } from 'react';
import swal from 'sweetalert';
import { useEffect } from 'react';


const baseUrl = process.env.NEXT_PUBLIC_HOST;
const saveURL = baseUrl + 'hr/create-account'
const hrURL = baseUrl + 'hr/'
const brURL = hrURL + 'branch'
const dpURL = hrURL + 'department'

const Testform = () => {
    const [selectedFile, setSelectedFile] = useState("https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=20&m=1214428300&s=170667a&w=0&h=NPyJe8rXdOnLZDSSCdLvLWOtIeC9HjbWFIx8wg5nIks=");
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
            token: state.stateReducer.token,
            open: state.stateReducer.open,
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
    // console.log(state.emInfo.password);
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let emID = `${year}${month < 10 ? `0${month}` : `${month}`}${date < 10 ? `0${date}` : `${date}`}${state.data.payload.at(-1).id + 1}`

    const submitHandler = (e) => {

        e.preventDefault();
        let info = {}
        if (e.target.password.value) {
            info = {
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                role: e.target.role.value,
                work_type: e.target.work_type.value,
                experience: e.target.experience.value,
                username: e.target.username.value,
                password: e.target.password.value,
                salary: e.target.salary.value,
                gender: e.target.gender.value,
                marital_status: e.target.marital_status.value,
                nationality: e.target.nationality.value,
                department: e.target.department.value,
                branch: e.target.branch.value,
                Personal_Picture: e.target.Personal_Picture.value,
                employee_id: e.target.employee_id.value,
                is_superuser: e.target.is_superuser.checked,
                is_staff: e.target.is_staff.checked,
                is_active: e.target.is_active.checked,

            }
        }
        else {
            info = {
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                role: e.target.role.value,
                work_type: e.target.work_type.value,
                experience: e.target.experience.value,
                username: e.target.username.value,
                salary: e.target.salary.value,
                gender: e.target.gender.value,
                marital_status: e.target.marital_status.value,
                nationality: e.target.nationality.value,
                department: e.target.department.value,
                branch: e.target.branch.value,
                Personal_Picture: e.target.Personal_Picture.value,
                employee_id: e.target.employee_id.value,
                is_superuser: e.target.is_superuser.checked,
                is_staff: e.target.is_staff.checked,
                is_active: e.target.is_active.checked,
            }
        }
        console.log(info);
        if (state.addorupdate == "add") {

            axios.post(saveURL, info, config).then(() => {
                swal("Good job!", "The data has been saved!", "success").then(() => {
                    dispatch(openModel(false))
                    dispatch(getRequest(hrURL, brURL, dpURL, config))
                })
            })
        }
        else {
            axios.put(baseUrl + `hr/${state.emInfo.id}/update-delete/`, info, config).then(() => {
                console.log(23132123,`${state.emInfo.id}/update-delete/`);
                swal("Good job!", "The data has been updated!", "success").then(() => {
                    dispatch(emInfo({}))
                    dispatch(getRequest(hrURL, brURL, dpURL, config))
                    dispatch(openModel(false))
                })
            })
        }

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
                                                        defaultValue={state.emInfo.first_name || ""}
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
                                                        defaultValue={state.emInfo.last_name || ""}
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
                                                        type="email"
                                                        name="email"
                                                        defaultValue={state.emInfo.email || ""}
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
                                                        defaultValue={state.emInfo.phone || ""}
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
                                                        defaultValue={state.emInfo.role || ""}
                                                        autoComplete="role-name"
                                                        className="border-1 border-violet-600 mt-1 block w-full py-2 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        {
                                                            roles.map((role, index) => {
                                                                return (

                                                                    <option key={index} value={role} >{role}</option>
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
                                                        defaultValue={state.emInfo.work_type || ""}
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
                                                        defaultValue={state.emInfo.experience || ""}
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
                                                        defaultValue={state.emInfo.username || ""}
                                                        id="Username"
                                                        className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md"
                                                    />
                                                    <label className="block text-sm font-medium text-gray-700"> Password </label>
                                                    {/* {!state.emInfo.username && */}

                                                        <input required defaultValue={state.emInfo.password || ""} name='password' className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md" type="password" />
                                                    {/* // } */}
                                                    {/* {state.emInfo.username &&
                                                        <>
                                                            <input defaultValue={state.emInfo.password || ""} name='password' className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md" type="password" />

                                                            <p className='text-sm ml-4 text-gray-400 mt-1 mb-0'>Keep the password field empty if you don't want to change the old password</p>
                                                        </>
                                                    } */}
                                                </div>

                                                <div className="col-span-6">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Employee ID
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="employee_id"
                                                        value={state.emInfo.employee_id || emID}
                                                        id="employee_id"
                                                        className="border-1 border-violet-600 mt-1 block w-full shadow-sm sm:text-ms py-1 pl-5 rounded-md"
                                                        readonly
                                                    />
                                                </div>

                                                <div className="col-span-6">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Salary
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="salary"
                                                        defaultValue={state.emInfo.salary || ""}
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
                                                        defaultValue={state.emInfo.gender || ""}
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
                                                        defaultValue={state.emInfo.marital_status || ""}
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
                                                        defaultValue={state.emInfo.nationality || ""}
                                                        autoComplete="Nationality"
                                                        className="border-1 border-violet-600 mt-1 block w-full py-2 px-3  bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        {
                                                            Nationalities.map((Nationality, index) => {
                                                                return (
                                                                    <option key={index} value={Nationality}>{Nationality}</option>
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
                                                        defaultValue={state.emInfo.department || ""}
                                                        autoComplete="Department"
                                                        className="border-1 border-violet-600 mt-1 block w-full py-2 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        {
                                                            state.departments.map((dep, index) => {
                                                                return (
                                                                    <option key={index} value={dep.id}>{dep.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>

                                                <div className="col-span-6 ">
                                                    <label htmlFor="Branch" className="block text-sm font-medium text-gray-700">
                                                        Branch
                                                    </label>
                                                    <select
                                                        id="Branch"
                                                        name="branch"
                                                        defaultValue={state.emInfo.branch || ""}
                                                        autoComplete="Branch"
                                                        className="border-1 border-violet-600 mt-1 block w-full py-2 px-3  bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        {
                                                            state.branches.branches.map((bran, index) => {
                                                                return (
                                                                    <option key={index} value={bran.id}>{bran.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>

                                                <div className="col-span-6 ">
                                                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                                                    <div className="mt-1 flex items-center">
                                                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100 text-center">
                                                            <div className="h-full w-full text-center text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                                <img src={selectedFile} alt="" className='h-full w-full' />
                                                            </div>
                                                        </span>

                                                        <input required name='Personal_Picture' defaultValue={state.emInfo.Personal_Picture || ""} onChange={(e) => setSelectedFile(e.target.value)} placeholder="https://example.com" pattern="https://.*" type="url" className="border-1 border-violet-600 mt-1 block w-1/2 ml-4 py-2 px-3  bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex mt-4 ml-3">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="super"
                                                        name="is_superuser"
                                                        defaultChecked={state.emInfo.is_superuser || false}
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm w-full">
                                                    <label htmlFor="super" className="font-medium text-gray-700">
                                                        Superuser
                                                    </label>
                                                    <p className="text-gray-500">Giving the user full authority on the site</p>
                                                </div>
                                            </div>

                                            <div className="flex  ml-3">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="staff"
                                                        name="is_staff"
                                                        defaultChecked={state.emInfo.is_staff || false}
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm w-full">
                                                    <label htmlFor="staff" className="font-medium text-gray-700">
                                                        Staff
                                                    </label>
                                                    <p className="text-gray-500">Giving the user full authority on the site</p>
                                                </div>
                                            </div>

                                            <div className="flex ml-3">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="active"
                                                        name="is_active"
                                                        defaultChecked={state.emInfo.is_active || false}
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm w-full">
                                                    <label htmlFor="active" className="font-medium text-gray-700">
                                                        Active
                                                    </label>
                                                    <p className="text-gray-500">Giving the user full authority on the site</p>
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
                                                        dispatch(openModel(false))
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
        </>
    )
}


export default Testform  