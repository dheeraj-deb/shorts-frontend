import React from 'react'
import DataTable from "react-data-table-component"
import { Header } from "../../components/admin/index"
function UserManagement() {
    const columns = [
        {
            name: 'username',
            selector: row => row.username,
            sortable: true
        },
        {
            name: 'email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'age',
            selector: row => row.age,
            sortable: true
        },
        {
            name: 'action',
            selector: row => row.action,
        }
    ]

    const data = [
        {
            id: 1,
            username: 'Beetlejuice',
            email: '1988',
            age: 18,
            action: <button>Block</button>
        },
        {
            id: 2,
            username: 'Ghostbusters',
            email: '1984',
            age: 18,
            action: <button>Block</button>
        },
    ]

    return (
        <div>
            <Header />
            <div>
                <div className='p-4'>
                    <h3 className='text-lg font-medium font-poppins'>User Management</h3>
                </div>
                <div>
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                    />
                </div>
            </div>
        </div>
    )
}

export default UserManagement