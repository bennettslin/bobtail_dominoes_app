import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Board from '../../Board'
import { getHexagonalMinWidthForBoard } from '../../../utils/music/render/board/width'
import './style'

const PuzzleBoard = ({
    className,
    board,
    moves = [],
    topChild,
    children,
}) => {
    const newBoard = [
        ...board,
        ...moves.map(move => ({
            ...move,
            isHighlight: true,
        })),
    ]

    const boardHexagonalMinWidth = getHexagonalMinWidthForBoard({
        board: newBoard,
        padding: 2,
    })

    return (
        <Board
            {...{
                className: cx(
                    'PuzzleBoard',
                    className,
                ),
                board: newBoard,
                boardHexagonalWidth: boardHexagonalMinWidth,
                boardHexagonalBaseWidth: boardHexagonalMinWidth,
                topChild,
            }}
        >
            {children}
        </Board>
    )
}

PuzzleBoard.propTypes = {
    className: PropTypes.string,
    board: PropTypes.arrayOf(PropTypes.shape({
        dominoIndex: PropTypes.number.isRequired,
        placement: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
        ),
    })).isRequired,
    moves: PropTypes.arrayOf(PropTypes.shape({
        dominoIndex: PropTypes.number.isRequired,
        placement: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
        ),
    })),
    topChild: PropTypes.node,
    children: PropTypes.node,
}

export default PuzzleBoard
