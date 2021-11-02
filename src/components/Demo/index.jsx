import React, { useEffect } from 'react'
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
                className: 'Demo',
                flexDirection: 'column',
                alignItems: 'normal',
            }}
        >
            <Flex
                {...{
                    justifyContent: 'spaceBetween',
                    style: {
                        backgroundColor: '#bdb',
                    },
                }}
            >
                <HomeButton />
                <Menu />
            </Flex>
            <Flex {...{ className: 'Demo__content' }} >
                <Board />
                <Flex {...{ className: 'Demo__info' }} >
                    <Flex
                        {...{
                            className: 'Demo__dominoes',
                            alignItems: 'normal',
                            style: {
                                backgroundColor: '#8bb',
                            },
                        }}
                    >
                        <PlayerCards />
                        <Pool />
                    </Flex>
                    <GameLogs />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Demo
