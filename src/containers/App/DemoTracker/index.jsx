import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { mapIsGameOver, mapScores } from '../../../redux/game/selector'

const DemoTracker = () => {
    const
        scores = useSelector(mapScores),
        isGameOver = useSelector(mapIsGameOver)

    useEffect(() => {
        if (isGameOver) {
            scores.forEach((score, playerIndex) => {
                logSuccess(
                    null,
                    {
                        action: 'demoScore',
                        label: playerIndex,
                        value: score,
                    },
                )
            })
        }
    }, [isGameOver])

    return null
}

export default DemoTracker
