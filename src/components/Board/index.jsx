import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../Flex'
import Domino from '../Domino'
import { getBoardOrderedByZIndex } from '../../utils/music/render/board/zIndex'
import {
    getBoardPositionStyling,
    getBoardSizeStyling,
} from '../../utils/music/styling/board'
import { PUZZLE_BOARD_HEXAGON_WIDTH } from '../../constants/music/puzzle'
import './style'

const Board = ({
    className,
    board,
    boardHexagonalWidth = PUZZLE_BOARD_HEXAGON_WIDTH,
    boardHexagonalBaseWidth = PUZZLE_BOARD_HEXAGON_WIDTH,
    DominoComponent = Domino,
    ...rest
}) => (
    <Flex
        {...{
            className: cx(
                'Board',
                className,
            ),
            ...rest,
        }}
    >
        <Flex
            {...{
                className: cx(
                    'Board__square',
                    className && `${className}__square`,
                ),
                flexGrow: 1,
            }}
        >
            <div
                {...{
                    className: cx(
                        'Board__movable',
                    ),
                    style: {
                        ...getBoardPositionStyling({
                            board,
                            boardHexagonalWidth,
                        }),
                        ...getBoardSizeStyling({
                            boardHexagonalWidth,
                            boardHexagonalBaseWidth,
                        }),
                    },
                }}
            >
                {getBoardOrderedByZIndex(board).map(move => {
                    const { dominoIndex, placement } = move
                    return (
                        <DominoComponent
                            {...{
                                key: dominoIndex,
                                dominoIndex,
                                placement,
                                boardHexagonalBaseWidth,
                            }}
                        />
                    )
                })}
            </div>
        </Flex>
    </Flex>
)

Board.propTypes = {
    className: PropTypes.string,
    board: PropTypes.arrayOf(PropTypes.shape({
        dominoIndex: PropTypes.number.isRequired,
        placement: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
        ),
    })).isRequired,
    boardHexagonalWidth: PropTypes.number,
    boardHexagonalBaseWidth: PropTypes.number,
    DominoComponent: PropTypes.func,
}

export default Board
