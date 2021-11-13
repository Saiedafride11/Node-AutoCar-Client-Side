import React, { useEffect, useState } from 'react';
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
import useAuth from '../../../hooks/useAuth';
import './MyOrder.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';


const MyOrder = () => {
    const [orders, setOrders] = useOrder();
    const {user} = useAuth();
    const [myOrders, setMyOrders] = useState();
    document.title = 'My Order';

    useEffect(() => {
        const car = orders?.filter(order => order.email === user.email);
        setMyOrders(car)
      }, [orders, user.email]);

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
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Order Deleted Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                }
            })
            }
    }


    return (
        <Container className="my-order py-5">
            <TableContainer component={Paper}>
                {
                    myOrders?.length === 0 ?
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
                            myOrders?.map((order, i) => (
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

export default MyOrder;