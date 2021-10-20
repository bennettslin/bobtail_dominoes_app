import { getFixed } from '../../general'

const START_TIME = Date.now()

export const getTimeDifference = () => {
    const difference = Date.now() - START_TIME
    return getFixed(difference * 0.001, 3)
}
