const SAFE_WINDOW = {
    localStorage: {},
}

export const getIsServerSide = () => (
    typeof window === 'undefined'
)

export const getWindow = () => (
    getIsServerSide() ?
        SAFE_WINDOW :
        window
)
