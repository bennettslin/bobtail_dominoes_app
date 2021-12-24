import { join } from '../../../general'
import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'

const PUZZLE_TYPE_NAMES = {
    [MAXIMUM_PUZZLE_TYPE]: 'MAXIMUM_PUZZLE_TYPE',
    [MISSING_PUZZLE_TYPE]: 'MISSING_PUZZLE_TYPE',
    [REGULAR_PUZZLE_TYPE]: 'REGULAR_PUZZLE_TYPE',
}

const
    NEWLINE = '\n',
    TAB = '    '

const stringify = entry => (
    JSON.stringify(entry)
        .replace(/,/g, ', ')
)

const formatLists = sets => (
    // Convert to arrays because server cannot store sets.
    `[${NEWLINE}` +
    sets.map(set => (
        `${TAB}${TAB}${TAB}${TAB}[${
            join(Array.from(set), ', ')
        }],${NEWLINE}`
    )).join('') +
    `${TAB}${TAB}${TAB}]`
)

const getTextForBoard = board => (
    JSON.stringify(board)
        .replace(/"/g, '')
        .replace(/:/g, ': ')
        .replace(/{/g, `{ `)
        .replace(/}/g, ` }`)
        .replace(/,/g, ', ')
        .replace(/\[{/g, `[${NEWLINE}${TAB}${TAB}{`)
        .replace(/}\]/g, `},${NEWLINE}${TAB}]`)
        .replace(/}, {/g, `},${NEWLINE}${TAB}${TAB}{`)
)

const getTextForMoves = moves => (
    `[${NEWLINE}` +
    moves.map(({
        dominoIndex,
        placement,
        pitchSets,
        points,
    }) => (
        `${TAB}${TAB}{${NEWLINE}` +
        `${TAB}${TAB}${TAB}dominoIndex: ${dominoIndex},${NEWLINE}` +
        `${TAB}${TAB}${TAB}placement: ${stringify(placement)},${NEWLINE}` +
        `${TAB}${TAB}${TAB}pitchLists: ${formatLists(pitchSets)},${NEWLINE}` +
        `${TAB}${TAB}${TAB}points: ${points},${NEWLINE}` +
        `${TAB}${TAB}},${NEWLINE}`
    )).join('') +
    `${TAB}]`
)

export const getTextForPuzzle = ({
    board,
    moves,
    puzzleType,
}) => (
    puzzleType ? (
        `{${NEWLINE}` +
        `${TAB}day: 0,${NEWLINE}` +
        `${TAB}puzzleType: ${PUZZLE_TYPE_NAMES[puzzleType]},${NEWLINE}` +
        `${TAB}board: ${getTextForBoard(board)},${NEWLINE}` +
        `${TAB}moves: ${getTextForMoves(moves)},${NEWLINE}` +
        `},`
    ) : ''
)