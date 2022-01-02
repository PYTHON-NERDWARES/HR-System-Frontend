import React from 'react'
import Table from 'react-bootstrap/Table'
import { MDBDataTable } from 'mdbreact';
import MaterialTable from "material-table";
import Image from 'next/image'
import logo from '../assets/p.jpg'
import { useSelector, useDispatch } from 'react-redux';
import { deleteRequest, getRequest , openModel , addOrUpdate} from '../store/states'
import CreateModel from './createmodel';
import { useState } from 'react'


const baseUrl = process.env.NEXT_PUBLIC_HOST;
const hrURL = baseUrl + 'hr/'
const brURL = hrURL + 'branch'
const dpURL = hrURL + 'department'


const EmployeesTable = () => {
  const dispatch = useDispatch();

  // const [openM, setOpenM] = useState(false)

  const state = useSelector((state) => {
    return {
      data: state.stateReducer.data,
      token: state.stateReducer.token,
      open:state.stateReducer.open
    }
  });

  const config = {
    headers: { "Authorization": `Bearer ${state.token.token.access}` }
  }

  const emData = state.data.payload.map(element => {
    return ({
      employee_id: `${element.employee_id}`, Personal_Picture: `${element.Personal_Picture}`, name: `${element.first_name} ${element.last_name}`, role: `${element.role}`, work_type: `${element.work_type}`, experience: `${element.experience}`, salary: `${element.salary} $`, gender: `${element.gender}`, nationality: `${element.nationality}`, marital_status: `${element.marital_status}`, days_taken: `${element.days_taken}`, days_remaining: `${element.days_remaining}`, department: `${element.department}`, branch: `${element.branch}`, phone: `${element.phone}`, email: `${element.email}`, id: `${element.id}`
    })
  })

  const data = emData;
  console.log(1225546, data);
  const actions = [
    {
      icon: 'edit',
      tooltip: 'Update Employee',
      onClick: (event, rowData) => {
        dispatch(addOrUpdate("update"))
        dispatch(openModel(true))
      }
    },
    {
      icon: 'delete',
      tooltip: 'Delete Employee',
      onClick: (event, rowData) => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
              dispatch(deleteRequest(baseUrl + `hr/${rowData.id}/update-delete`, config)).then(() => {
                dispatch(getRequest(hrURL, brURL, dpURL, config))
              }
              )
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
      }
    },
    {
      icon: 'add',
      tooltip: 'Add User',
      isFreeAction: true,
      onClick: (event) => {
        dispatch(addOrUpdate("add"))
        dispatch(openModel(true))

      }
    }
  ]
  const columns = [
    {
      title: "#",
      field: "employee_id",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    },
    {
      title: "Personal Picture",
      // field: "name",
      cellStyle: { whiteSpace: 'nowrap' },
      render: rowData => <img className='rounded-full border w-20 h-20' src={rowData.Personal_Picture} />,
      align: 'center'

    },
    {
      title: "Name",
      field: "name",
      cellStyle: { whiteSpace: 'nowrap' },
      align: 'center'
    },
    {
      title: "Role",
      field: "role",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    },
    {
      title: "Work Type",
      field: "work_type",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    },
    {
      title: "Experience",
      field: "experience",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    }, {
      title: "Salary",
      field: "salary",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    }, {
      title: "Gender",
      field: "gender",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    }, {
      title: "Nationality",
      field: "nationality",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    }, {
      title: "Marital Status",
      field: "marital_status",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    }, {
      title: "Leave Taken",
      field: "days_taken",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    }, {
      title: "Leaves Remaining",
      field: "days_remaining",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    }, {
      title: "Department",
      field: "department",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    }, {
      title: "Branch",
      field: "branch",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    },
    {
      title: "Email",
      field: "email",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    },
  ];

  return (
    <div className='w-3/4'>
      <div className='w-11/12 mx-auto mt-4'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <MaterialTable className="" title="Employee Details" data={data} columns={columns} actions={actions} options={{ search: true, paging: true, filtering: true, exportButton: true, doubleHorizontalScroll: true, defaultExpanded: 'true', loadingType: 'linear', actionsColumnIndex: -1 }} />
      </div>
      

    </div>
  )
}

export default EmployeesTable