import React from 'react'
import './pagination.scss'
export const Pagination = ({pagesArray, page, setPage}) => {
    return (
        <div className='pagination'>
            {pagesArray.map((p) => {
                return (
                    <button className={p === page ? 'pagination-btn pagination-btn_active' : 'pagination-btn'} key={p} onClick={() => setPage(p)}>{p}</button>
                )
            })}
        </div>
    )
}
