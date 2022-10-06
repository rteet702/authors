import axios from 'axios'
import { AuthorTable } from '../components/AuthorTable'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material'

export const HomePage = () => {

    const [authors, setAuthors] = useState([])
    const [refresh, setRefresh] = useState(false)
    const nav = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(response => setAuthors(response.data))
    }, [refresh])

    const reload = () => {
        setRefresh(!refresh)
    }

    return (
        <Typography component={"span"} align='center'>
            <Card variant='outlined'>
                <h1>Favorite Authors</h1>
                <Button variant='contained' color='success' onClick={e => nav('/new')}>Add an Author</Button>
                <CardContent>
                    <AuthorTable authors={authors} reload={reload} />
                </CardContent>
            </Card>
        </Typography>
    )
}