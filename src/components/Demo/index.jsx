import React, { useEffect } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import HomeButton from '../../containers/Main/Header/HomeButton'
import Menu from '../../containers/Main/Header/Menu'
import Flex from '../Flex'
import GameLogs from './GameLogs'
import PlayerCards from './PlayerCards'
import Board from './Board'
import Pool from './Pool'
import { updateGame } from '../../redux/game/action'
import {
    mapBoard, mapHands, mapIsGamePlaying, mapCurrentPlayerIndex, mapPool, mapScores, mapTurns,
} from '../../redux/game/selector'
import { getBestPointedMovesForTurn } from '../../utils/music/game/ai'
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
        if (currentPlayerIndex === -1 && !isGamePlaying) {
            // Start new game upon loading this page.
            dispatch(updateGame(getInitialGame()))
        }
    }, [])

    return (
        <Flex
            {...{
                className: cx(
                    'Demo',
                ),
                flexGrow: 1,
                flexDirection: 'column',
                justifyContent: 'spaceBetween',
                alignItems: 'normal',
            }}
        >
            <Board />
            <Flex
                {...{
                    justifyContent: 'spaceBetween',
                    gap: 'md',
                    style: {
                        border: '1px solid cyan',
                    },
                }}
            >
                <HomeButton />
                <Menu />
            </Flex>
            <Flex
                {...{
                    className: cx(
                        'Demo__bottomRow',
                    ),
                    justifyContent: 'spaceBetween',
                    alignItems: { md: 'normal' },
                    flexDirection: {
                        default: 'column',
                        sm: 'row',
                        md: 'column',
                        lg: 'row',
                    },
                    style: {
                        border: '1px solid brown',
                        overflow: 'hidden',
                    },
                }}
            >
                <GameLogs />
                <Flex
                    {...{
                        flexDirection: {
                            default: 'columnReverse',
                            md: 'row',
                            lg: 'columnReverse',
                        },
                        justifyContent: 'spaceBetween',
                        gap: 'md',
                        style: {
                            border: '1px solid blue',
                        },
                    }}
                >
                    <Pool />
                    <PlayerCards />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Demo
