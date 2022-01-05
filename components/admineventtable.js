import React from 'react'
import Table from 'react-bootstrap/Table'

const AdminEventTable = () => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Branch</th>
                        <th>Event</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Amman</td>
                        <td>Apple WWDC21</td>
                        <td>5/1/2022</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Irbid</td>
                        <td>PowerShell & DevOps Global Summit</td>
                        <td>8/1/2022</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Al Zarqaa</td>
                        <td>DockerCon</td>
                        <td>15/1/2022</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Irbid</td>
                        <td>Open Source Summit North America
                        </td>
                        <td>18/1/2022</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Irbid</td>
                        <td>DevOpsCon Hybrid Edition</td>
                        <td>2/2/2022</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Amman</td>
                        <td>DeveloperWeek Virtual</td>
                        <td>16/2/2022</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Amman</td>
                        <td>Oracle Developer Live Virtual Events</td>
                        <td>23/2/2022</td>
                    </tr>

                </tbody>
            </Table>
        </div>
    )
}

export default AdminEventTable
