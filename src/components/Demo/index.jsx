import React, { useEffect } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Flex from '../Flex'
import DemoLog from './Log'
import { updateGame } from '../../redux/game/action'
import {
    mapBoard, mapHands, mapIsGamePlaying, mapPlayerIndex, mapPool, mapScores, mapTurns,
} from '../../redux/game/selector'
import { getBestPointedMovesForTurn } from '../../utils/music/game/ai'
import { getInitialGame, registerTurn } from '../../utils/music/game/play'
import { margin__lg } from '../../constants/responsive'
import './style'

const Demo = () => {
    const dispatch = useDispatch()
    const pool = useSelector(mapPool)
    const board = useSelector(mapBoard)
    const hands = useSelector(mapHands)
    const scores = useSelector(mapScores)
    const turns = useSelector(mapTurns)
    const isGamePlaying = useSelector(mapIsGamePlaying)
    const playerIndex = useSelector(mapPlayerIndex)

    const registerHandTurn = () => {
        const hand = hands[playerIndex]

        dispatch(updateGame(registerTurn({
            pool,
            board,
            hands,
            scores,
            turns,
            playerIndex,

            // Discarded indices are registered only if there are no moves.
            moves: getBestPointedMovesForTurn({ hand, board }),
            discardedIndices: Array.from(hand),
        })))
    }

    useEffect(() => {
        if (playerIndex > -1 && isGamePlaying) {
            const turnTimeoutIndex = setTimeout(() => registerHandTurn(), 500)

            // Return callback to clear timeout upon unmount.
            return () => clearTimeout(turnTimeoutIndex)
        }
    }, [playerIndex])

    useEffect(() => {
        if (!isGamePlaying) {
            // Start new game upon loading this page.
            dispatch(updateGame(getInitialGame()))
        } else {
            // Continue game if navigating from a different page.
            registerHandTurn()
        }
    }, [])

    return (
        <Flex
            {...{
                className: cx(
                    'Demo',
                ),
                flexGrow: 1,
                justifyContent: 'space-between',
                alignItems: 'start',
                gap: margin__lg,
            }}
        >
            <DemoLog />
        </Flex>
    )
}

export default Demo
