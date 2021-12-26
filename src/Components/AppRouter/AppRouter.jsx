import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RoutesArray } from './Routes'

export const AppRouter = () => {
    return (
        <Routes>
            {RoutesArray.map((route, index) => {
               return <Route key={index} element={<route.element/>} path = {route.path} exact = {route.exact}/>
            })}
        </Routes>
    )
}
