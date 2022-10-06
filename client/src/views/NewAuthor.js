import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthorForm } from '../components/AuthorForm'
import { Typography, Button } from '@mui/material'

export const NewAuthor = () => {

    const nav = useNavigate()
    const [errors, setErrors] = useState([])

    const submitHandler = (e, formInfo) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/authors', {
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
                <h1>Add an Author:</h1>
                <Button variant='contained' onClick={e => nav('/')}>Homepage</Button>
            </div>
            <div>
                {errors.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <AuthorForm submission={submitHandler} />
        </Typography>
    )
}