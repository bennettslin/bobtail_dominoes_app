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
        scores: getInitialScores(playersCount),
        turns: getInitialTurns(board),
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
    playersCount,
    handCount = HAND_COUNT,
}) => {
    const hand = hands[playerIndex]

    if (moves) {
        addMovesToBoard({ playerIndex, moves, board })
        addToScores({ playerIndex, handCount, moves, scores })
        playHand({ hand, handCount, moves, pool })
    } else {
        exchangeHand({ hand, pool, playersCount })
    }

    const { isFinalTurn } = addTurn({
        pool,
        turns,
        moves,
        playerIndex,
        playersCount,
    })

    return {
        pool,
        board,
        hands,
        scores,
        turns,
        isFinalTurn,
    }
}
