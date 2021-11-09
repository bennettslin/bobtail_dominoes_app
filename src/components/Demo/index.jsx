import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Flex from '../Flex'
import DemoBody from './Body'
import DemoHeader from './Header'
import aiWorker from '../../workers/aiWorker'
import { updateGame } from '../../redux/game/action'
import {
    mapBoard,
    mapHands,
    mapIsGamePlaying,
    mapCurrentPlayerIndex,
    mapPool,
    mapScores,
    mapTurns,
} from '../../redux/game/selector'
import { getInitialGame, registerTurn } from '../../utils/music/game/play'
import './style'

const Demo = () => {
    const
        dispatch = useDispatch(),
        pool = useSelector(mapPool),
        board = useSelector(mapBoard),
        hands = useSelector(mapHands),
        scores = useSelector(mapScores),
        turns = useSelector(mapTurns),
        currentPlayerIndex = useSelector(mapCurrentPlayerIndex),
        isGamePlaying = useSelector(mapIsGamePlaying)

    const registerHandTurn = () => {
        const hand = hands[currentPlayerIndex]

        aiWorker.getBestPointedMovesForTurnFromWorker({ hand, board })
            .then(moves => (
                dispatch(updateGame(registerTurn({
                    pool,
                    board,
                    hands,
                    scores,
                    turns,
                    playerIndex: currentPlayerIndex,

                    moves,
                    // Discarded indices are registered if there are no moves.
                    discardedIndices: Array.from(hand),
                })))
            ))

    }

    useEffect(() => {
        if (currentPlayerIndex > -1 && isGamePlaying) {
            const turnTimeoutIndex = setTimeout(
                () => registerHandTurn(), 500,
            )

            // Return callback to clear timeout upon unmount.
            return () => clearTimeout(turnTimeoutIndex)
        }
    }, [currentPlayerIndex])

    useEffect(() => {
        if (currentPlayerIndex === -1 && !isGamePlaying) {
            // Start new game upon loading this page.
            dispatch(updateGame(getInitialGame()))
        }
    }, [])

    return (
        <Flex
            {...{
                className: 'Demo',
                flexDirection: 'column',
                alignItems: 'normal',
            }}
        >
            <DemoHeader />
            <DemoBody />
        </Flex>
    )
}

export default Demo
