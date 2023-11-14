import { useEffect, useState } from 'react'

export const useWidth = (delay = 100) => {

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        let timeout = false
        const getWidth = () => setWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            clearTimeout(timeout)
            timeout = setTimeout(getWidth, delay)
        })
        return () => {
            window.removeEventListener('resize', getWidth)
        }
    })

    return width
}

export const maxMoviesByWidth = width => {
    if (width < 768) {
        return ((col, row) => [col * row, col * 2])(1, 5)
    } else if (width < 930) {
        return ((col, row) => [col * row, col])(2, 4)
    } else if (width < 1200) {
        return ((col, row) => [col * row, col])(3, 4)
    } else if (width < 1470) {
        return ((col, row) => [col * row, col])(4, 4)
    } else if (width < 1740) {
        return ((col, row) => [col * row, col])(5, 4)
    }


    return ((col, row) => [col * row, col])(6, 4)
}