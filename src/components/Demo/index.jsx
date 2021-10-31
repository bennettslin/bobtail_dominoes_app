import React, { useEffect } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Flex from '../Flex'
import GameLogs from './GameLogs'
import PlayerCards from './PlayerCards'
import PoolSection from './PoolSection'
import { updateGame } from '../../redux/game/action'
import {
    mapBoard, mapHands, mapIsGamePlaying, mapCurrentPlayerIndex, mapPool, mapScores, mapTurns,
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
    const currentPlayerIndex = useSelector(mapCurrentPlayerIndex)
    const isGamePlaying = useSelector(mapIsGamePlaying)

    const registerHandTurn = () => {
        const hand = hands[currentPlayerIndex]

        dispatch(updateGame(registerTurn({
            pool,
            board,
            hands,
            scores,
            turns,
            playerIndex: currentPlayerIndex,

            // Discarded indices are registered only if there are no moves.
            moves: getBestPointedMovesForTurn({ hand, board }),
            discardedIndices: Array.from(hand),
        })))
    }

    useEffect(() => {
        if (currentPlayerIndex > -1 && isGamePlaying) {
            const turnTimeoutIndex = setTimeout(() => registerHandTurn(), 500)

            // Return callback to clear timeout upon unmount.
            return () => clearTimeout(turnTimeoutIndex)
        }
    }, [currentPlayerIndex])

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
            <Flex
                {...{
                    flexGrow: 1,
                    flexDirection: 'column',
                    alignItems: 'start',
                    gap: margin__lg,
                }}
            >
                <PlayerCards />
                <PoolSection />
            </Flex>
            <GameLogs />
        </Flex>
    )
}

export default Demo
