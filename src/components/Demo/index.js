import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import StyledShadow from '../Styled/Shadow'
import { getPointsForPitchSets } from '../../utils/music/chords/points'
import { getBestPointedMovesForTurn } from '../../utils/music/game/ai'
import { getDominoPitches } from '../../utils/music/game/dominoes'
import { exchangeTurn, getInitialGame, playTurn } from '../../utils/music/game/play'
import { margin__lg } from '../../constants/responsive'
import './style'
import { getDominoLabel } from '../../utils/music/chords/label'

const PLAYERS_COUNT = 4

const {
    pool,
    board,
    hands,
    turns,
    scores,
} = getInitialGame({ playersCount: PLAYERS_COUNT })

const Demo = () => {
    const [playerIndex, setHandIndex] = useState(0)
    const hand = hands[playerIndex]

    const logGame = () => {
        hands.forEach((hand, index) => {
            console.log(`hand ${index}`, JSON.stringify(Array.from(hand)))
        })
        console.log('pool', JSON.stringify(Array.from(pool)))
    }

    const playTurnForHand = () => {
        const { moves } = getBestPointedMovesForTurn({ hand, board, limit: 3 })

        // If player can't make any moves, exchange hand.
        if (!moves.length) {
            exchangeTurn({
                pool,
                hands,
                playerIndex,
                turns,
            })

        // Otherwise, play hand.
        } else {
            playTurn({
                pool,
                board,
                moves,
                hands,
                playerIndex,
                turns,
                scores,
            })
        }

        logGame()

        // TODO: Get game end from exchangeTurn and playTurn.
        if (!pool.size && !hand.size) {
            endGame()
        } else {
            setTimeout(() => setHandIndex((playerIndex + 1) % PLAYERS_COUNT), 100)
        }
    }

    const endGame = () => {
        console.log('Game ended.')
    }

    useEffect(() => {
        playTurnForHand()
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
            <Flex
                {...{
                    className: cx(
                        'Demo__child',
                    ),
                    flexDirection: 'column',
                }}
            >
                {board.map(({
                    playerIndex,
                    dominoIndex,
                    pitchSets = [],
                }, index) => {
                    const dominoLabel = getDominoLabel(getDominoPitches(dominoIndex))
                    return (
                        <Flex
                            {...{
                                key: index,
                                className: cx(
                                    'Demo__grandchild',
                                ),
                            }}
                        >
                            <StyledShadow>
                                {pitchSets.length ? (
                                    `Player ${playerIndex} played ${dominoLabel} for ${getPointsForPitchSets(pitchSets)} points.`
                                ) : (
                                    `Domino ${dominoLabel} placed to start the board.`
                                )}
                            </StyledShadow>
                        </Flex>
                    )
                })}
            </Flex>
            <Flex
                {...{
                    className: cx(
                        'Demo__child',
                    ),
                }}
            >
                <StyledShadow>
                    {scores.map((score, index) => (
                        `Player ${index}: ${score} pts`
                    )).join(', ')}
                </StyledShadow>
            </Flex>
        </Flex>
    )
}

export default Demo
