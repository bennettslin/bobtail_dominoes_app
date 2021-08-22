const SAFE_WINDOW = {}

export const getIsServerSide = () => (
    typeof window === 'undefined'
)

export const getWindow = () => (
    getIsServerSide() ?
        SAFE_WINDOW :
        window
)
