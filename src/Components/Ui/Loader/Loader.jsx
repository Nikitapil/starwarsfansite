import React from 'react'
import loader from '../../../img/loader.gif'
import './loaader.scss'
export const Loader = () => {
    return (
        <div className='loader'>
            <img src={loader}alt="" />
        </div>
    )
}
