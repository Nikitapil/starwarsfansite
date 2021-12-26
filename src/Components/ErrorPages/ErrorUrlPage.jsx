import React from 'react'
import { Link } from 'react-router-dom'
import './errors.scss'
export const ErrorUrlPage = () => {
    return (
        <div className='error-url-page'>
            <Link exact="true"
            to="/"
            className='error__link'
            >
                Go to main
            </Link>
        </div>
    )
}
