import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main.Page'

export default function Routers () {
  return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
  )
}
