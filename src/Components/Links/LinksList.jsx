import React from 'react'
import { UniversalLink } from './UniversalLink'

export const LinksList = ({data, className, basePath}) => {
    return (
        <div  className={className}>
                <h2 className={`${className}-title`}>{basePath}:</h2>
                <ul className={`${className}-list`}>
                    {data.map((item)=> {
                        return <UniversalLink key={item.url} basePath={basePath} item={item} className={className}/>
                    })}
                </ul>
            </div>
    )
}
