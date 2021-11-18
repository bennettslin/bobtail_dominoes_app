import { addMovesToBoard, getInitialBoard } from './board'
import { exchangeHand, getInitialHands, playHand } from './hands'
import { getInitialExtendedPool, getInitialStandardPool } from './pool'
import { addMovesToScores, getInitialScores } from './scores'
import { addTurn, getInitialTurns } from './turns'
import { HAND_COUNT } from '../../../../constants/music/play'

const PLAYERS_COUNT = 4

export const getInitialGame = ({
    isExtendedGame = false,
    playersCount = PLAYERS_COUNT,
    handCount = HAND_COUNT,
} = {}) => {
    const
        pool = isExtendedGame ?
            getInitialExtendedPool() :
            getInitialStandardPool(),
        board = getInitialBoard(pool)

    return {
        pool,
        board,
        hands: getInitialHands({ playersCount, handCount, pool }),
        scores: getInitialScores(playersCount),
        turns: getInitialTurns(board),
        playersCount,
        handCount,
        isGameOver: false,
        currentPlayerIndex: 0,
    }
}

export const registerTurn = ({
    pool,
    board,
    hands,
    scores,
    turns,
    moves,
    playerIndex,
    playersCount = PLAYERS_COUNT,
    handCount = HAND_COUNT,
    discardedIndices,
}) => {
    const hand = hands[playerIndex]

    if (moves) {
        playHand({ pool, hand, moves, handCount })
        addMovesToBoard({ board, moves, playerIndex })
        addMovesToScores({ scores, moves, playerIndex, handCount })
    } else {
        exchangeHand({ pool, hand, discardedIndices })
    }

    const { isGameOver } = addTurn({
        pool,
        hands,
        turns,
        moves,
        playersCount,
        discardedIndices,
        scores,
    })

    return {
        pool,
        board,
        hands,
        scores,
        turns,
        isGameOver,
        currentPlayerIndex: (playerIndex + 1) % playersCount,
    }
}
