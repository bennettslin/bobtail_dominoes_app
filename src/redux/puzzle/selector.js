import { PUZZLE_STORE } from './reducer'

export const mapPuzzleTestDate = (
    { [PUZZLE_STORE]: { puzzleTestDate } },
) => puzzleTestDate

export const mapGeneratePuzzleConfig = (
    { [PUZZLE_STORE]: { generatePuzzleConfig } },
) => generatePuzzleConfig

export const mapPuzzle = (
    { [PUZZLE_STORE]: { puzzle } },
) => puzzle
