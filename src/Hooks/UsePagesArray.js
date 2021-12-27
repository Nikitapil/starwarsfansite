import { useCallback } from "react"

export const usePagesArray = (total) => {
   const pagesArray = useCallback(() => {
        const pageCount = Math.ceil(total/10)
        return Array.from({length: pageCount}, (a, b) => b+1)
    }, [total])
    return pagesArray
}