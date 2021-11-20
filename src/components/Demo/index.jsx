import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Flex from '../Flex'
import DemoBody from './Body'
import DemoHeader from './Header'
import aiWorker from '../../workers/aiWorker'
import {
    initialiseGame,
    registerGameTurn,
    updateGame,
} from '../../redux/game/action'
import {
    mapBoard,
    mapCurrentHand,
    mapCurrentPlayerIndex,
    mapGameId,
    mapIsDemoAutoplayOn,
    mapIsGameOver,
    mapMoves,
} from '../../redux/game/selector'
import './style'

const Demo = () => {
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
        [isTurnAudioComplete, setIsTurnAudioComplete] = useState(true)

    const registerHandTurn = () => {
        dispatch(registerGameTurn())
    }

    const completeTurnAudio = () => {
        setIsTurnAudioComplete(true)
    }

    const clearTurnTimeout = () => {
        // Needed for unmount, for some reason.
        completeTurnAudio()
        clearTimeout(timeoutRef.current)
    }

    useEffect(() => {
        // TODO: Recalculate moves when board is refreshed.
    }, [])

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
        if (currentPlayerIndex > -1 && !isGameOver) {
            // Queue the next moves.
            aiWorker.getBestPointedMovesForTurnFromWorker({
                hand: currentHand,
                board,
            }).then(moves => {
                console.log('moves', moves)
                dispatch(updateGame({ moves }))
            })

            // TODO: Sound audio for current turn.
            setIsTurnAudioComplete(false)
            timeoutRef.current = setTimeout(completeTurnAudio, 1000)
            return clearTurnTimeout
        }
    }, [
        // A turn was just played, or the demo was reloaded in the same session.
        currentPlayerIndex,

        // A new game was initialised.
        gameId,
    ])

    useEffect(() => {
        // Start new game only upon first loading the demo in this user session.
        if (currentPlayerIndex === -1 && !isGameOver) {
            dispatch(initialiseGame())
        }
    }, [])

    return (
        <Flex
            {...{
                className: 'Demo',
                // Ensure that menu is not blocked by board movement.
                flexDirection: 'columnReverse',
                alignItems: 'normal',
            }}
        >
            <DemoBody />
            <DemoHeader />
        </Flex>
    )
}

export default Demo
