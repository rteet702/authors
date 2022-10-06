import React from 'react'
import { HomePage } from '../views/HomePage'
import { NewAuthor } from '../views/NewAuthor'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/new' element={<NewAuthor />} />
            </Routes>
        </BrowserRouter>
    )
}