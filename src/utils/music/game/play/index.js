import { addMovesToBoard, generateBoard } from './board'
import { exchangeHand, generateHands, playHand } from './hands'
import { generateExtendedPool, generateStandardPool } from './pool'
import { addToScore, generateScores } from './scores'
import { addExchangedTurn, addPlayedTurn, generateTurns } from './turns'
import { HAND_COUNT } from '../../../../constants/music/play'

const generateGame = ({
    handsCount,
    handCount = HAND_COUNT,
    isExtendedGame = false,
}) => {
    const pool = isExtendedGame ?
        generateExtendedPool() :
        generateStandardPool()

    return {
        pool,
        board: generateBoard(pool),
        hands: generateHands({ handsCount, handCount, pool }),
        turns: generateTurns(),
        scores: generateScores(handsCount),
    }
}

export const generateStandardGame = ({
    handsCount,
    handCount = HAND_COUNT,
}) => generateGame({ handsCount, handCount })

export const generateExtendedGame = ({
    handsCount,
    handCount = HAND_COUNT,
}) => generateGame({ handsCount, handCount, isExtendedGame: true })

export const playTurn = ({
    pool,
    board,
    moves,
    hands,
    handIndex,
    handCount = HAND_COUNT,
    turns,
    scores,

}) => {
    const hand = hands[handIndex]
    addMovesToBoard({ handIndex, moves, board })
    addToScore({ handIndex, scores })
    addPlayedTurn({ hand, handIndex, moves, points: 5, turns })
    playHand({ hand, handCount, moves, pool })

    return {
        pool,
        board,
        hands,
        turns,
        scores,
    }
}

export const exchangeTurn = ({
    pool,
    hands,
    handIndex,
    turns,

}) => {
    const hand = hands[handIndex]
    addExchangedTurn({ hand, handIndex, turns })
    exchangeHand({ hand, pool })

    return {
        pool,
        hands,
        turns,
    }
}
