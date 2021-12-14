import { join } from '../../../general'

const
    NEWLINE = '\n',
    TAB = '    ',
    TABBED_NEWLINE = `${NEWLINE}${TAB}`

const formatAndStringify = entry => (
    JSON.stringify(entry)
        .replace(/,/g, ', ')
)

const formatSets = sets => (
    `[${NEWLINE}` +
    sets.map(set => (
        `${TAB}${TAB}${TAB}new Set([${
            join(Array.from(set), ', ')
        }]),${NEWLINE}`
    )).join('') +
    `${TAB}${TAB}]`
)

const getTextForBoard = board => (
    JSON.stringify(board)
        .replace(/"/g, '')
        .replace(/:/g, ': ')
        .replace(/{/g, `{ `)
        .replace(/}/g, ` }`)
        .replace(/,/g, ', ')
        .replace(/\[{/g, `[${TABBED_NEWLINE}{`)
        .replace(/}\]/g, `},${NEWLINE}]`)
        .replace(/}, {/g, `},${TABBED_NEWLINE}{`)
)

const getTextForMoves = moves => (
    `[${NEWLINE}` +
    moves.map(({
        dominoIndex,
        placement,
        pitchSets,
        points,
    }) => (
        `${TAB}{${NEWLINE}` +
        `${TAB}${TAB}dominoIndex: ${dominoIndex},${NEWLINE}` +
        `${TAB}${TAB}placement: ${formatAndStringify(placement)},${NEWLINE}` +
        `${TAB}${TAB}pitchSets: ${formatSets(pitchSets)},${NEWLINE}` +
        `${TAB}${TAB}points: ${points},${NEWLINE}` +
        `${TAB}},${NEWLINE}`
    )).join('') +
    `]`
)

export const getTextForPuzzle = ({
    board,
    moves,
}) => (
    `board: ${getTextForBoard(board)},${NEWLINE}` +
    `moves: ${getTextForMoves(moves)},`
)
