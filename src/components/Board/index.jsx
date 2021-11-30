import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../Flex'
import Domino from '../Domino'
import { getBoardOrderedByZIndex } from '../../utils/music/render/board/zIndex'
import { getBoardPositionStyling } from '../../utils/music/render/board/position'
import { getBoardSizeStyling } from '../../utils/music/render/board/size'
import './style'

const Board = ({
    className,
    board,
    boardHexagonalWidth,
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
                        ...getBoardSizeStyling({ boardHexagonalWidth }),
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
    boardHexagonalWidth: PropTypes.number.isRequired,
    DominoComponent: PropTypes.func,
}

export default Board
