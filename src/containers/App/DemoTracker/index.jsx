import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { mapIsGameOver, mapScores, mapTurns } from '../../../redux/game/selector'
import { getIsWinner } from '../../../utils/music/game/points'

const DemoTracker = () => {
    const
        scores = useSelector(mapScores),
        turns = useSelector(mapTurns),
        isGameOver = useSelector(mapIsGameOver)

    useEffect(() => {
        if (isGameOver) {
            scores.forEach((score, playerIndex) => {
                const isWinner = getIsWinner({
                    turns,
                    playerIndex,
                })
                logSuccess(
                    null,
                    {
                        action: isWinner ?
                            'demoWinnerScore' :
                            'demoScore',
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
