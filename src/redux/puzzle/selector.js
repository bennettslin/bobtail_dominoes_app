import { PUZZLE_STORE } from './reducer'

export const mapPuzzleTestDate = (
    { [PUZZLE_STORE]: { puzzleTestDate } },
) => puzzleTestDate

export const mapPuzzleEndDate = (
    { [PUZZLE_STORE]: { puzzleEndDate } },
) => puzzleEndDate

export const mapGeneratePuzzleConfig = (
    { [PUZZLE_STORE]: { generatePuzzleConfig } },
) => generatePuzzleConfig

export const mapPuzzle = (
    { [PUZZLE_STORE]: { puzzle } },
) => puzzle

export const mapPuzzleText = (
    { [PUZZLE_STORE]: { puzzleText } },
) => puzzleText
