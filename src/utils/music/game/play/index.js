import { addMovesToBoard, generateBoard } from './board'
import { exchangeHand, generateHands, playHand } from './hands'
import { generateExtendedPool, generateStandardPool } from './pool'
import { generateScores } from './scores'
import { generateTurns } from './turns'
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

}) => {
    playHand({ hand: hands[handIndex], handCount, moves, pool })
    addMovesToBoard({ handIndex, moves, board })

    return {
        pool,
        board,
        hands,
    }
}

export const exchangeTurn = ({
    pool,
    hands,
    handIndex,

}) => {
    exchangeHand({ hand: hands[handIndex], pool })

    return {
        pool,
        hands,
    }
}
