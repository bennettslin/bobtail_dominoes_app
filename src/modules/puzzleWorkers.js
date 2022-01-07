import PuzzlesWorker from '../workers/puzzles.worker'

let puzzlesWorker = null

const getInitialisedPuzzlesWorker = () => {
    puzzlesWorker = new PuzzlesWorker()
    return puzzlesWorker
}

export const getPuzzlesWorker = () => (
    puzzlesWorker || getInitialisedPuzzlesWorker()
)
