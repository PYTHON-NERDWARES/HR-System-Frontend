import React from 'react'
import MaterialTable from "material-table";
import { useSelector, useDispatch } from 'react-redux';
import { deleteRequest, getRequest, open_branch_Modal, addOrUpdate, emInfo } from '../store/states'
import BranchModal from './BranchModal';


const baseUrl = process.env.NEXT_PUBLIC_HOST;
const hrURL = baseUrl + 'hr/'
const brURL = hrURL + 'branch'
const dpURL = hrURL + 'department'


const BranchInfoTable = () => {

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      data: state.stateReducer.data,
      token: state.stateReducer.token,
      open_branch_form: state.stateReducer.open_branch_form,
      branches: state.stateReducer.branches,
    }
  });

  const config = {
    headers: { "Authorization": `Bearer ${state.token.token.access}` }
  }

  const branchData = state.branches.branches.map(element => {
    return ({
      branche_id: `${element.id}`,
      branch_manager: `${element.branch_manager}`,
      name: `${element.name}`,
      phone: `${element.phone}`,
      turnover: `${element.turnover} M$`,
      location: `${element.city}.${element.country} `,
      description: `${element.history}`
    })
  })

  const data = branchData;
  const actions = [
    {
      icon: 'edit',
      tooltip: 'Update Employee',
      onClick: (event, rowData) => {
        let arr = []
        state.branches.branches.map(element => {
          if (element.id == rowData.branche_id) {

            arr.push(element)
          }
        })

        let depInfo = {
          id: arr[0].id,
          name: arr[0].name,
          phone: arr[0].phone,
          history: arr[0].history,
          city: arr[0].city,
          country: arr[0].country,
          turnover: arr[0].turnover,
          branch_manager: arr[0].branch_manager
        }
        dispatch(open_branch_Modal(true))
        dispatch(emInfo(depInfo))
        dispatch(addOrUpdate("update"))
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
              dispatch(deleteRequest(baseUrl+`hr/branch/${rowData.branche_id}/update-delete/`, config)).then(() => {
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
        dispatch(emInfo({}))
        dispatch(open_branch_Modal(true))

      }
    }
  ]
  const columns = [
    {
      title: "#",
      field: "branche_id",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    },
    {
      title: "Manager",
      field: "branch_manager",
      cellStyle: { whiteSpace: 'nowrap' },
      align: 'center'
    },
    {
      title: "Name",
      field: "name",
      cellStyle: { whiteSpace: 'nowrap' },
      align: 'center'
    },
    {
      title: "Phone",
      field: "phone",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    },
    {
      title: "Turnover",
      field: "turnover",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    },
    {
      title: "Location",
      field: "location",
      align: 'center',
      cellStyle: { whiteSpace: 'nowrap' },
    },
    {
      title: "Description",
      field: "description",
      align: 'center',
      cellStyle: { textAlign: 'left' },
    },


  ];

  return (
    <div className='w-3/4'>
      <div className='w-11/12 mx-auto mt-4'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <MaterialTable className=""
          title="Branches Details"
          data={data} columns={columns}
          actions={actions}
          options={{headerStyle: {
            backgroundColor: '#624FB6',
            color: '#FFF'
          },
            search: true,
            paging: true,
            filtering: true,
            exportButton: true,
            doubleHorizontalScroll: true,
            defaultExpanded: 'true',
            loadingType: 'linear',
            actionsColumnIndex: -1
          }} />
      </div>

<BranchModal/>
    </div>
  )

}

export default BranchInfoTable