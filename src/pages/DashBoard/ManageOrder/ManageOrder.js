import React from 'react';
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

    return (
        <Container>
            <TableContainer component={Paper}>
                {
                    orders?.length === 0 ?
                        <h2 style={{ color: '#1976d2', margin: '50px 0', textAlign: 'center'}}>No Show Any Order</h2>
                    :
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <TableHead style={{backgroundColor: '#1976d2', color: '#fff'}}>
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
                                    <Button variant="contained">Approve</Button>
                                </TableCell>
                                <TableCell align="left">
                                    <Button variant="contained"><FontAwesomeIcon icon={faTrashAlt} /></Button>
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