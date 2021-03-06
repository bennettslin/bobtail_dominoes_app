import { join } from '../../../general'
import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
    REGULAR_PUZZLE_TYPE,
} from '../../../../constants/music/puzzle'
import { getPointsForMoves } from '../../mechanics/points'

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

const formatList = set => (
    `[${join(Array.from(set), ', ')}]`
)

const formatLists = sets => (
    // Convert to arrays because server cannot store sets.
    `[${NEWLINE}` +
    sets.map(set => (
        `${TAB}${TAB}${TAB}${TAB}${formatList(set)},${NEWLINE}`
    )).join('') +
    `${TAB}${TAB}${TAB}]`
)

const getBoardText = board => (
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

const getMovesText = moves => (
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
    day = 0,
    board,
    hand,
    moves,
    missingMoves,
    puzzleType,
}) => (
    puzzleType ? (
        NEWLINE +
        `${day}: {${NEWLINE}` +
        `${TAB}puzzleType: ${PUZZLE_TYPE_NAMES[puzzleType]},${NEWLINE}` +
        `${TAB}board: ${getBoardText(board)},${NEWLINE}` +
        (
            hand ?
                `${TAB}handList: ${formatList(hand)},${NEWLINE}` :
                ''
        ) +
        (
            moves ?
                `${TAB}moves: ${getMovesText(moves)},${NEWLINE}` :
                ''
        ) +
        (
            missingMoves ?
                `${TAB}missingMoves: ${getBoardText(missingMoves)},${NEWLINE}` :
                ''
        ) +
        (
            moves?.length > 1 ?
                `${TAB}points: ${getPointsForMoves({ moves })},${NEWLINE}` :
                ''
        ) +
        `},`
    ) : ''
)
