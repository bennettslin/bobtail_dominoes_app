import { getBestPointedMovesForTurn } from '../utils/music/game/ai'

export const getBestPointedMovesForTurnFromWorker = ({
    hand,
    board,
    limit,
}) => getBestPointedMovesForTurn({ hand, board, limit })

export const closeMyself = () => {
    self.close()
}
