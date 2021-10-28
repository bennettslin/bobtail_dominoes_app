import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import Button from '../Button'
import Flex from '../Flex'
import StyledShadow from '../Styled/Shadow'
import { getBestMovesForTurn } from '../../utils/music/game/moves'
import { exchangeTurn, generateStandardGame, playTurn } from '../../utils/music/game/play'
import { margin__lg, margin__sm } from '../../constants/responsive'
import './style'

const HANDS_COUNT = 3

const {
    pool,
    board,
    hands,
} = generateStandardGame({ handsCount: HANDS_COUNT })

const Demo = () => {
    const [handIndex, setHandIndex] = useState(0)
    const hand = hands[handIndex]

    const logGame = () => {
        hands.forEach((hand, index) => {
            console.log(`hand ${index}`, JSON.stringify(Array.from(hand)))
        })
        console.log('pool', JSON.stringify(Array.from(pool)))
    }

    const playTurnForHand = () => {
        const { moves } = getBestMovesForTurn({ hand, board, limit: 3 })

        // If player can't make any moves, exchange hand.
        if (!moves.length) {
            exchangeTurn({ pool, hands, handIndex })

        // Otherwise, play hand.
        } else {
            playTurn({ pool, board, moves, hands, handIndex })
        }

        logGame()

        // TODO: Get game end from exchangeTurn and playTurn.
        if (!pool.size && !hand.size) {
            endGame()
        } else {
            setTimeout(() => setHandIndex((handIndex + 1) % HANDS_COUNT), 100)
        }
    }

    const endGame = () => {
        console.log('Game ended.')
    }

    useEffect(() => {
        playTurnForHand()
    }, [handIndex])

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
                    handIndex,
                    dominoIndex,
                    points,
                }, index) => (
                    <Flex
                        {...{
                            key: index,
                            className: cx(
                                'Demo__grandchild',
                            ),
                        }}
                    >
                        <StyledShadow>
                            {points ? (
                                `Player ${handIndex} played domino ${dominoIndex} for ${points} points.`
                            ) : (
                                `Domino ${dominoIndex} placed to start the board.`
                            )}
                        </StyledShadow>
                    </Flex>
                ))}
            </Flex>
            <Flex
                {...{
                    gap: margin__sm,
                }}
            >
                <Button
                    {...{
                        handleButtonClick: logGame,
                    }}
                >
                    Log current state
                </Button>
            </Flex>
        </Flex>
    )
}

export default Demo
