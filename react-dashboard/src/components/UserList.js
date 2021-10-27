import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userrows } from './ChartData';
import { Link } from 'react-router-dom';

export default function UserList() {

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 150,
    renderCell: (params) => {
        return(
            <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt=''/>
            {params.row.username}
            </div>
        )
    }
  },
  {
    field: 'email',
    headerName: 'email',
    width: 200,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
    width: 160,
  },
  {
      field :"action",
      headerName: "Action",
      width: 120,
        renderCell: (params) => {
            return(
                <>
                <Link to={`/user/${params.row.id}`}>
                <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutline className='userListDelete'/>
                </>
            )
        }
  }
];
    return (
        <div className='userlist'>
            <DataGrid rows={userrows} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </div>
    )
}
