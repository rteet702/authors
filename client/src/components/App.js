import React from 'react'
import { HomePage } from '../views/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}