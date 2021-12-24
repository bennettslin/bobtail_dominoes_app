import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Board from '../../Board'
import { getHexagonalMinWidthForBoard } from '../../../utils/music/render/board/width'
import './style'

const PuzzleBoard = ({
    className,
    board,
    hand,
    moves = [],
    topChild,
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
                hand,
                topChild,
            }}
        />
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
    hand: PropTypes.object,
    moves: PropTypes.arrayOf(PropTypes.shape({
        dominoIndex: PropTypes.number.isRequired,
        placement: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
        ),
    })),
    topChild: PropTypes.node,
}

export default PuzzleBoard