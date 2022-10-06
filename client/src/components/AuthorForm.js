import React, { useEffect, useState } from 'react'
import { FormControl, Input, InputLabel } from '@mui/material'

export const AuthorForm = props => {

    const { submission, author } = props
    const [authorName, setAuthorName] = useState('')

    useEffect(() => {
        setAuthorName(author ? author.name : '')
    }, [author])

    return (
        <form onSubmit={e => submission(e, authorName)}>
            <FormControl>
                <InputLabel htmlFor="name">Author Name</InputLabel>
                <Input type="text" name='name' id="name" onChange={e => setAuthorName(e.target.value)} value={authorName || ''} />
                <input type="submit" value="Submit" />
            </FormControl>
        </form>
    )
}