import React, { useEffect, useState } from 'react';
import './ReceivedMessage.css';
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


const ReceivedMessage = () => {
    const [messages, setMessages] = useState([])
    
    document.title = "Received Message";

    useEffect( () => {
        fetch('https://polar-dusk-34230.herokuapp.com/message')
        .then(res => res.json())
        .then(data => setMessages(data))
    },[])

    // Delete
    const handleDeleteMessage = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
            const url = `https://polar-dusk-34230.herokuapp.com/message/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then( data => {
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remaining = messages?.filter(message => message._id !== id);
                    setMessages(remaining)
                }
            })
            }
    }
    
    return (
        <Container className="message py-5">
            <TableContainer component={Paper}>
                {
                    messages?.length === 0 ?
                        <h2 style={{ color: '#1976d2', margin: '50px 0', textAlign: 'center'}}>No Show Any Message</h2>
                    :
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <TableHead style={{backgroundColor: '#1976d2'}}>
                            <TableRow>
                                <TableCell align="left">SL.NO.</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Messages</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            messages?.map((message, i) => (
                                <TableRow key={message._id}>
                                <TableCell align="left">{i}</TableCell>
                                <TableCell align="left">{message.email}</TableCell>
                                <TableCell align="left">{message.message}</TableCell>
                                <TableCell align="left">
                                    <Button onClick={() => handleDeleteMessage(message._id)} variant="contained"><FontAwesomeIcon icon={faTrashAlt} /></Button>
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

export default ReceivedMessage;