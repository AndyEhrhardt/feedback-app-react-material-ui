import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Admin() {
    
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        getFeedback();
    }, [])

    const getFeedback = () => {
        axios.get('/responses').then(response => {
            setFeedback(response.data);
            console.log(feedback);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Feedback Table">
                <TableHead>
                    <TableRow>
                        <TableCell>Feeling</TableCell>
                        <TableCell align="right">Understanding</TableCell>
                        <TableCell align="right">Support</TableCell>
                        <TableCell align="right">Comments</TableCell>
                        <TableCell align="right">1:1</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Flagged</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {feedback.map((user) => (
                        <TableRow
                        key={user.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">{user.feeling}</TableCell>
                            <TableCell align="right">{user.understanding}</TableCell>
                            <TableCell align="right">{user.support}</TableCell>
                            <TableCell align="right">{user.comments}</TableCell>
                            {user.one ? (<TableCell align="right">Requested</TableCell>) : (<TableCell align="right">Not Requested</TableCell>)}
                            <TableCell align="right">{user.date}</TableCell>
                            <TableCell align="right"><Checkbox/></TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Admin;