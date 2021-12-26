import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../../Hooks/UseFetching'
import { usePagesArray } from '../../Hooks/UsePagesArray'
import CommonService from '../../Services/CommonService'
import { ErrorUrlPage } from '../ErrorPages/ErrorUrlPage'
import { NotFound } from '../ErrorPages/NotFound'
import { LinksList } from '../Links/LinksList'
import { SearchForm } from '../SearchForm/SearchForm'
import { Template } from '../Template/Template'
import { Loader } from '../Ui/Loader/Loader'
import { Pagination } from '../Ui/Pagination/Pagination'
import './itempage.scss'
export const ItemPage = () => {
    const {pathItem} = useParams() 
    const [data, setData] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [page, setPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')
    const pagesArray = usePagesArray(totalItems)
    const [fetchItems, itemsLoading, itemsError] = useFetching(async () => {
        const response = await CommonService.getAllItems(pathItem, page, searchQuery)
        setData(response.data.results)
        setTotalItems(response.data.count)
    })

    useEffect(() => {
        fetchItems()
    }, [page, searchQuery, pathItem])

    useEffect(() => {
        setSearchQuery('')
    }, [pathItem])

    if (itemsError) {
        return (
            <ErrorUrlPage/>
        )
    }
    return (
        <Template
        content={ itemsLoading ? <Loader/> :
            <div className='container item__container'>
                <h1 className='item__title'>{pathItem === 'people' ? 'Characters' : pathItem}</h1>
                <SearchForm setQuery={setSearchQuery}/>
                {data.length ? <LinksList noTitle data={data} className={'item-list'} basePath= {pathItem}/> : <NotFound/>}
                <Pagination pagesArray={pagesArray()} page={page} setPage={setPage}/>
            </div>
        }
        />
    )
}