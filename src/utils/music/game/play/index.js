import { addMovesToBoard, getInitialBoard } from './board'
import { exchangeHand, getInitialHands, playHand } from './hands'
import { getInitialExtendedPool, getInitialStandardPool } from './pool'
import { addToScores, getInitialScores } from './scores'
import { addTurn, getInitialTurns } from './turns'
import { HAND_COUNT } from '../../../../constants/music/play'

export const getInitialGame = ({
    isExtendedGame = false,
    playersCount,
    handCount = HAND_COUNT,
}) => {
    const
        pool = isExtendedGame ?
            getInitialExtendedPool() :
            getInitialStandardPool(),
        board = getInitialBoard(pool)

    return {
        pool,
        board: getInitialBoard(pool),
        hands: getInitialHands({ playersCount, handCount, pool }),
        turns: getInitialTurns(board),
        scores: getInitialScores(playersCount),
    }
}

export const playTurn = ({
    pool,
    board,
    moves,
    hands,
    playerIndex,
    handCount = HAND_COUNT,
    turns,
    scores,

}) => {
    const hand = hands[playerIndex]
    addMovesToBoard({ playerIndex, moves, board })
    addToScores({ playerIndex, handCount, moves, scores })
    addTurn({ hand, playerIndex, moves, turns })
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
    playerIndex,
    turns,

}) => {
    const hand = hands[playerIndex]
    addTurn({ hand, playerIndex, turns })
    exchangeHand({ hand, pool })

    return {
        pool,
        hands,
        turns,
    }
}
