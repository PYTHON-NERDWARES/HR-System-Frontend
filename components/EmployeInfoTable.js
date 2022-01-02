import React from 'react'
import Table from 'react-bootstrap/Table'
import { MDBDataTable } from 'mdbreact';
import MaterialTable from "material-table";


const EmployeesTable = () => {
    const data = [
        { name: "asdadadsadav sdadadadad", email: "john@gmail.com", age: 12, gender: "Male" },
        { name: "Bren", email: "bren@gmail.com", age: 24, gender: "Male" },
        { name: "Marry", email: "marry@gmail.com", age: 18, gender: "Female" },
        { name: "Shohail", email: "shohail@gmail.com", age: 25, gender: "Male" },
        { name: "Aseka", email: "aseka@gmail.com", age: 19, gender: "Female" },
        { name: "Meuko", email: "meuko@gmail.com", age: 12, gender: "Female" },
      ];
      const columns = [
        {
          title: "Name",
          field: "name",
        },
        {
            title: "Name",
            field: "name",
          },
          {
            title: "Name",
            field: "name",
          },
          {
            title: "Name",
            field: "name",
          },
          {
            title: "Name",
            field: "name",
          },
          {
            title: "Name",
            field: "name",
          },{
            title: "Name",
            field: "name",
          },{
            title: "Name",
            field: "name",
          },{
            title: "Name",
            field: "name",
          },{
            title: "Name",
            field: "name",
          },{
            title: "Name",
            field: "name",
          },{
            title: "Name",
            field: "name",
          },{
            title: "Name",
            field: "name",
          },{
            title: "Name",
            field: "name",
          },{
            title: "Name",
            field: "name",
          },{
            title: "Name",
            field: "name",
          },{
            title: "Name",
            field: "name",
          },
        {
          title: "Email",
          field: "email",
        },
        {
          title: "Age",
          field: "age",
        },
        {
          title: "Gender",
          field: "gender",
        },
      ];
    
    return (
        <div className='w-3/4'>
            <div className='w-11/12 mx-auto mt-4'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <MaterialTable className="" title="Employee Details" data={data} columns={columns} options={{ search: true, paging: true, filtering: true, exportButton: true, doubleHorizontalScroll:true ,  }}/>
            </div>
            

        </div>
    )
}

export default EmployeesTable