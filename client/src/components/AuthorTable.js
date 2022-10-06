import React from 'react'
import axios from 'axios'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const AuthorTable = props => {

    const { authors, reload } = props

    const nav = useNavigate()

    const processDelete = id => {
        axios.delete('http://localhost:8000/api/authors/' + id)
            .then(() => {
                reload()
            })
            .catch(err => console.error(err))
    }

    return (
        <TableContainer>
            <Table size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell>Author</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        authors.map((item, index) => (

                            <TableRow key={index}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
                                    <Button variant='contained'>Edit</Button>
                                    <Button color='error' variant='contained' onClick={() => processDelete(item._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>

                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}