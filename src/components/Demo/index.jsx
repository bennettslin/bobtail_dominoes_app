import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import StyledShadow from '../Styled/Shadow'
import DemoLog from './Log'
import { getBestPointedMovesForTurn } from '../../utils/music/game/ai'
import { getInitialGame, registerTurn } from '../../utils/music/game/play'
import { margin__lg } from '../../constants/responsive'
import './style'

const PLAYERS_COUNT = 4
const HAND_COUNT = 3

const {
    pool, board, hands, scores, turns,
} = getInitialGame({ playersCount: PLAYERS_COUNT, handCount: HAND_COUNT })

const Demo = () => {
    const [hasGameEnded, setHasGameEnded] = useState(false)
    const [playerIndex, setPlayerIndex] = useState(0)
    const hand = hands[playerIndex]

    const playTurnForHand = () => {
        const moves = getBestPointedMovesForTurn({ hand, board, limit: 3 })

        const { isGameEnd } = registerTurn({
            pool,
            board,
            hands,
            scores,
            turns,
            moves,
            playerIndex,
            playersCount: PLAYERS_COUNT,
            handCount: HAND_COUNT,

            // These are ignored if there are moves.
            discardedIndices: Array.from(hand),
        })

        if (isGameEnd) {
            setHasGameEnded(true)
        }

        return setTimeout(() => {
            setPlayerIndex((playerIndex + 1) % PLAYERS_COUNT)
        }, 250)
    }

    useEffect(() => {
        if (!hasGameEnded) {
            const timeoutIndex = playTurnForHand()

            // Safely unmount.
            return () => clearTimeout(timeoutIndex)
        }
    }, [playerIndex])

    return (
        <Flex
            {...{
                className: cx(
                    'Demo',
                ),
                flexGrow: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: margin__lg,
            }}
        >
            <DemoLog
                {...{
                    turns,
                    playersCount: PLAYERS_COUNT,
                    handCount: HAND_COUNT,
                }}
            />
            <Flex>
                <StyledShadow>
                    {scores.map((score, playerIndex) => (
                        `Player ${playerIndex + 1}: ${score} pts`
                    )).join(', ')}
                </StyledShadow>
            </Flex>
        </Flex>
    )
}

export default Demo
