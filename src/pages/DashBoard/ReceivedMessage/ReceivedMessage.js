import React, { useEffect, useState } from 'react';
import './ReceivedMessage.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';


const ReceivedMessage = () => {
    const [messages, setMessages] = useState([])
    
    document.title = "Received Message";

    useEffect( () => {
        fetch('https://polar-dusk-34230.herokuapp.com/message')
        .then(res => res.json())
        .then(data => setMessages(data))
    },[])
    
    return (
        <Container className="message">
            <TableContainer component={Paper}>
                {
                    messages?.length === 0 ?
                        <h2 style={{ color: '#1976d2', margin: '50px 0', textAlign: 'center'}}>No Show Any Message</h2>
                    :
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <TableHead style={{backgroundColor: '#1976d2'}}>
                            <TableRow>
                                <TableCell align="left">SL. NO.</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Messages</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            messages?.map((message, i) => (
                                <TableRow key={message._id}>
                                <TableCell component="th" scope="row">
                                    {i}
                                </TableCell>
                                <TableCell align="left">{message.email}</TableCell>
                                <TableCell align="left">{message.message}</TableCell>
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

export default ReceivedMessage;