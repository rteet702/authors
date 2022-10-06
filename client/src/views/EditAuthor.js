import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthorForm } from '../components/AuthorForm'
import { Typography, Button } from '@mui/material'

export const EditAuthor = () => {

    const nav = useNavigate()
    const [errors, setErrors] = useState([])
    const [author, setAuthor] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(author => setAuthor(author.data))
    }, [])

    const submitHandler = (e, formInfo) => {
        e.preventDefault()

        axios.put('http://localhost:8000/api/authors/' + id, {
            name: formInfo
        })
            .then(() => {
                nav('/')
            })
            .catch(error => {
                const errorResponse = error.response.data.errors

                for (const error of Object.keys(errorResponse)) {
                    setErrors([...errors, errorResponse[error].message])
                }
            })
    }

    return (
        <Typography component={"span"}>
            <div className='header'>
                <h1>Edit an Author:</h1>
                <Button variant='contained' onClick={e => nav('/')}>Homepage</Button>
            </div>
            <div>
                {errors.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <AuthorForm submission={submitHandler} author={author} />
        </Typography>
    )
}