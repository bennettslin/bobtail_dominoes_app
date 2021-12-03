import React from 'react'
import PropTypes from 'prop-types'
import Board from '../../Board'
import { getHexagonalMinWidthForBoard } from '../../../utils/music/render/board/width'

const PuzzleBoard = ({
    className,
    board,
}) => {
    const boardHexagonalMinWidth = getHexagonalMinWidthForBoard({
        board,
        padding: 2,
    })

    return (
        <Board
            {...{
                className,
                board,
                boardHexagonalWidth: boardHexagonalMinWidth,
                boardHexagonalBaseWidth: boardHexagonalMinWidth,
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
}

export default PuzzleBoard
