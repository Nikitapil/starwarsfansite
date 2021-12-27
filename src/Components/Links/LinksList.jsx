import React from 'react'
import { UniversalLink } from './UniversalLink'

export const LinksList = ({data, className, basePath, noTitle, film}) => {
    return (
        <div  className={className}>
                {!noTitle && <h2 className={`${className}-title`}>{basePath === 'people' ? 'characters' : basePath}:</h2>}
                <ul className={`${className}-list`}>
                    {data.map((item)=> {
                        return <UniversalLink key={item.url} film = {film} basePath={basePath} item={item} className={className}/>
                    })}
                </ul>
            </div>
    )
}
