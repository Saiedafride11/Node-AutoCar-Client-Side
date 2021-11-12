import React from 'react';
import './ManageOrder.css';
import useOrder from '../../../hooks/useOrder';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ManageOrder = () => {
    const [orders, setOrders] = useOrder()
    
    document.title = "Manage Order";
    // Delete
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
            const url = `https://polar-dusk-34230.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then( data => {
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remaining = orders?.filter(order => order._id !== id);
                    setOrders(remaining)
                }
            })
            }
    }

    // Update 
    const updateInfo = {
        status: 'Approve',
    }
    const handleUpdateStatus = id => {
        const url = `https://polar-dusk-34230.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const remaining = orders?.filter(order => order._id === id)[0];
                remaining.status = "Approve";
                setOrders([...orders]);
                alert('Updated successfully')
            }
        })
    }


    return (
        <Container className="manage-order">
            <TableContainer component={Paper}>
                {
                    orders?.length === 0 ?
                        <h2 style={{ color: '#1976d2', margin: '50px 0', textAlign: 'center'}}>No Show Any Order</h2>
                    :
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <TableHead style={{backgroundColor: '#1976d2'}}>
                            <TableRow>
                                <TableCell align="left">SL. NO.</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Car Type</TableCell>
                                <TableCell align="left">Date</TableCell>
                                <TableCell align="left">Status</TableCell>
                                <TableCell align="left"></TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            orders?.map((order, i) => (
                                <TableRow key={order._id}>
                                <TableCell component="th" scope="row">
                                    {i}
                                </TableCell>
                                <TableCell>
                                    {order.name}
                                </TableCell>
                                <TableCell align="left">{order.email}</TableCell>
                                <TableCell align="left">{order.type}</TableCell>
                                <TableCell align="left">{order.date}</TableCell>
                                <TableCell align="left" style={{ color: order.status === "Pending" ? '#dc3545' : '#1976d2' }}>{order.status}</TableCell>
                                <TableCell align="left">
                                    <Button onClick={() => handleUpdateStatus(order._id)} variant="contained">Approve</Button>
                                </TableCell>
                                <TableCell align="left">
                                    <Button onClick={() => handleDeleteOrder(order._id)} variant="contained"><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                </TableCell>
                                </TableRow>
                            ))
                        }
                        </TableBody>
                    </Table>
                }
            </TableContainer>
        </Container>
    );
};

export default ManageOrder;