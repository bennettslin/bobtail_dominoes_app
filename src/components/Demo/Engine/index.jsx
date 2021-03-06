import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    initialiseGame,
    registerGameTurn,
    updateGame,
} from '../../../redux/game/action'
import {
    mapBoard,
    mapCurrentHand,
    mapCurrentPlayerIndex,
    mapGameId,
    mapIsDemoAutoplayOn,
    mapIsGameOver,
    mapMoves,
} from '../../../redux/game/selector'
import {
    getAiWorker,
    terminateAiWorker,
} from '../../../modules/aiWorker'

const DemoEngine = () => {
    const
        timeoutRef = useRef(),
        dispatch = useDispatch(),
        gameId = useSelector(mapGameId),
        board = useSelector(mapBoard),
        moves = useSelector(mapMoves),
        currentHand = useSelector(mapCurrentHand),
        currentPlayerIndex = useSelector(mapCurrentPlayerIndex),
        isGameOver = useSelector(mapIsGameOver),
        isDemoPlayingOn = useSelector(mapIsDemoAutoplayOn),
        [isTurnAudioComplete, setIsTurnAudioComplete] = useState(false)

    const registerHandTurn = () => {
        dispatch(registerGameTurn())
    }

    const cleanup = () => {
        terminateAiWorker()
        clearTimeout(timeoutRef.current)
    }

    useEffect(() => {
        if (
            isDemoPlayingOn &&
            isTurnAudioComplete &&
            moves
        ) {
            registerHandTurn()
        }
    }, [isDemoPlayingOn, isTurnAudioComplete, moves])

    useEffect(() => {
        // Either turn was just played, or reloading demo in same session.
        if (currentPlayerIndex > -1 && !isGameOver) {
            if (!moves) {
                // Queue the next moves.
                getAiWorker().getBestPointedMovesForTurnFromWorker({
                    hand: currentHand,
                    board,
                }).then(({ moves }) => {
                    dispatch(updateGame({ moves }))
                })
            }

            // TODO: Sound audio for current turn.
            setIsTurnAudioComplete(false)
            timeoutRef.current = setTimeout(
                () => setIsTurnAudioComplete(true),
                1000,
            )
        }
    }, [currentPlayerIndex])

    useEffect(() => {
        // Handle subsequent new game in this session.
        if (
            gameId &&
            currentPlayerIndex === -1 &&
            !isGameOver
        ) {
            cleanup()
            dispatch(updateGame({ currentPlayerIndex: 0 }))
        }
    }, [gameId])

    useEffect(() => {
        // Start first new game of this session.
        if (!gameId) {
            // Cleanup not needed, so set current player now.
            dispatch(initialiseGame({ currentPlayerIndex: 0 }))
        }
        return cleanup
    }, [])

    return null
}

export default DemoEngine
