import { getBestPointedMovesForTurn } from '../utils/music/ai'

export const getBestPointedMovesForTurnFromWorker = ({
    hand,
    board,
    limit,
}) => getBestPointedMovesForTurn({ hand, board, limit })
