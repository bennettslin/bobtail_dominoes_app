import { addMovesToBoard, getInitialBoard } from './board'
import { exchangeHand, getInitialHands, playHand } from './hands'
import { getInitialExtendedPool, getInitialStandardPool } from './pool'
import { addMovesToScores, getInitialScores } from './scores'
import { addTurn, getInitialTurns } from './turns'

export const getInitialGame = ({
    isExtendedGame = false,
    handCount,
    playersCount,
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
        isGameOver: false,
    }
}

export const registerTurn = ({
    pool,
    board,
    hands,
    scores,
    turns,
    moves,
    handCount,
    playersCount,
    playerIndex,
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
    }
}
