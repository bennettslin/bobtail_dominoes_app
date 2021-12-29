import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Board, { boardPropTypes } from '../../Board'
import { getBoardBasedOnShowAnswer } from '../../../utils/music/puzzles/answer'
import { getHexagonalMinWidthForBoard } from '../../../utils/music/render/board/width'
import './style'

const PuzzleBoard = ({
    className,
    board: rawBoard,
    moves,
    missingMoves,
    showAnswer,
    topChild,
    children,

}) => {
    const
        board = getBoardBasedOnShowAnswer({
            board: rawBoard,
            moves,
            missingMoves,
            showAnswer,
        }),
        boardHexagonalMinWidth = getHexagonalMinWidthForBoard({
            board,
            padding: 2,
        })

    return (
        <Board
            {...{
                className: cx(
                    'PuzzleBoard',
                    className,
                ),
                board,
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
    board: boardPropTypes.isRequired,
    moves: boardPropTypes,
    missingMoves: boardPropTypes,
    showAnswer: PropTypes.bool,
    topChild: PropTypes.node,
    children: PropTypes.node,
}

export default PuzzleBoard
