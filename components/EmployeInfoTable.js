import React from 'react'
import Table from 'react-bootstrap/Table'

const AdminEventTable = () => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        
                        <th>Full Name</th>
                        <th>social status</th>
                        <th>position </th>
                        <th>Birthday </th>
                        <th>National ID / passport No </th>
                        <th>Address </th>
                        <th>Nationality</th>


                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ahmad Abdul Ghafour</td>
                        <td>Married</td>
                        <td>Software Engineer</td>
                        <td>1/1/1985</td>
                        <td>9855588548</td>
                        <td>Amman - Abu nsair - Bno.25</td>
                        <td>Syrian</td>
                    </tr>
                                     
                </tbody>
            </Table>
        </div>
    )
}

export default AdminEventTable
