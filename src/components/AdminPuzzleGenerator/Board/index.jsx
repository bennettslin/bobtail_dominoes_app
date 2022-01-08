import React from 'react'
import cx from 'classnames'
import PuzzleBoard from '../../Puzzle/Board'
import { boardPropTypes } from '../../../constants/propTypes'

const AdminPuzzleBoard = ({
    board,
    moves,
}) => (
    <PuzzleBoard
        showAnswer
        {...{
            className: cx(
                'AdminPuzzleBoard',
            ),
            board,
            moves,
        }}
    />
)

AdminPuzzleBoard.propTypes = {
    board: boardPropTypes,
    moves: boardPropTypes,
}

export default AdminPuzzleBoard
