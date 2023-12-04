import React from 'react'
import ReactDOM, {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { render } from 'react-dom'


import "./index.css"
import Layout from './Layout'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Login from './Pages/Login'

createRoot(document.getElementById("root"))
.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='login' element={<Login />} />
    </Routes>
    </BrowserRouter>
)




