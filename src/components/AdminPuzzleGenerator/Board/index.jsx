import React from 'react'
import cx from 'classnames'
import PuzzleBoard from '../../Puzzle/Board'
import { useSelector } from 'react-redux'
import { mapPuzzle } from '../../../redux/puzzle/selector'
import './style'

const AdminPuzzleBoard = () => {
    const
        puzzle = useSelector(mapPuzzle),
        { board, moves, missingMoves } = puzzle || {}

    return (
        <PuzzleBoard
            showAnswer
            {...{
                className: cx(
                    'AdminPuzzleBoard',
                ),
                board: board || [],
                moves: moves || missingMoves || [],
            }}
        />
    )
}

export default AdminPuzzleBoard
