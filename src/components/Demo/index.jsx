import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Flex from '../Flex'
import DemoBody from './Body'
import DemoHeader from './Header'
import aiWorker from '../../workers/aiWorker'
import { initialiseGame, registerGameTurn } from '../../redux/game/action'
import {
    mapBoard,
    mapHands,
    mapIsGameOver,
    mapCurrentPlayerIndex,
    mapIsDemoAutoplayOn,
} from '../../redux/game/selector'
import './style'

const Demo = () => {
    const
        dispatch = useDispatch(),
        board = useSelector(mapBoard),
        hands = useSelector(mapHands),
        currentPlayerIndex = useSelector(mapCurrentPlayerIndex),
        isGameOver = useSelector(mapIsGameOver),
        isDemoPlayingOn = useSelector(mapIsDemoAutoplayOn)

    const registerHandTurn = () => {
        const hand = hands[currentPlayerIndex]

        aiWorker.getBestPointedMovesForTurnFromWorker({ hand, board })
            .then(moves => (
                dispatch(registerGameTurn({ moves }))
            ))

    }

    useEffect(() => {
        if (
            isDemoPlayingOn &&
            !isGameOver &&
            currentPlayerIndex > -1
        ) {
            const turnTimeoutIndex = setTimeout(
                () => registerHandTurn(), 500,
            )

            // Return callback to clear timeout upon unmount.
            return () => clearTimeout(turnTimeoutIndex)
        }
    }, [currentPlayerIndex, isDemoPlayingOn, isGameOver])

    useEffect(() => {
        if (!isDemoPlayingOn) {
            // TODO: Clear the timeout.
        }
    }, [isDemoPlayingOn])

    useEffect(() => {
        if (currentPlayerIndex === -1 && isGameOver) {
            // Start new game upon loading this page.
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
