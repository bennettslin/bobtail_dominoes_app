import { getInitialBoardForPuzzle } from '../utils/music/puzzles/general/board'
import { getBestMoveForPuzzle } from '../utils/music/puzzles/general/move'
import { getBestMovesForPuzzle } from '../utils/music/puzzles/general/moves'
import { getBestMissingMovesForPuzzle } from '../utils/music/puzzles/general/missing'

export const getInitialBoardForPuzzleFromWorker = props => (
    getInitialBoardForPuzzle(props)
)

export const getBestMoveForPuzzleFromWorker = props => (
    getBestMoveForPuzzle(props)
)

export const getBestMovesForPuzzleFromWorker = props => (
    getBestMovesForPuzzle(props)
)

export const getBestMissingMovesForPuzzleFromWorker = props => (
    getBestMissingMovesForPuzzle(props)
)
