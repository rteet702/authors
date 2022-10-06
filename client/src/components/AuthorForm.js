import React, { useState } from 'react'
import { FormControl, Input, InputLabel } from '@mui/material'

export const AuthorForm = props => {

    const { submission } = props

    const [authorName, setAuthorName] = useState('')

    return (
        <form onSubmit={e => submission(e, authorName)}>
            <FormControl>
                <InputLabel htmlFor="name">Author Name</InputLabel>
                <Input type="text" name='name' id="name" onChange={e => setAuthorName(e.target.value)} />
                <input type="submit" value="Submit" />
            </FormControl>
        </form>
    )
}