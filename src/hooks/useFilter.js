import { useMemo } from "react";

export function useFilter(movies, trigger) {
    const sortedList = useMemo(() => {
        if (trigger) {
            return movies.filter(item => item.duration < 40)
        }
        return movies
    }, [movies, trigger])
    return sortedList
}