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
import './style'

const Board = ({
    className,
    board,
    boardHexagonalWidth,
    boardHexagonalBaseWidth,
    DominoComponent = Domino,
    topChild,
    children,
    ...rest
}) => (
    <Flex
        {...{
            className: cx(
                'Board',
                className,
            ),
            flexDirection: 'column',
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
                    const {
                        dominoIndex,
                        placement,
                        isHighlight,
                    } = move
                    return (
                        <DominoComponent
                            {...{
                                key: dominoIndex,
                                dominoIndex,
                                placement,
                                isHighlight,
                                boardHexagonalBaseWidth,
                            }}
                        />
                    )
                })}
            </div>
        </Flex>
        {topChild && (
            <Flex
                {...{
                    className: cx(
                        'Board__topChild',
                    ),
                }}
            >
                {topChild}
            </Flex>
        )}
        {children && (
            <Flex
                {...{
                    className: cx(
                        'Board__children',
                    ),
                }}
            >
                {children}
            </Flex>
        )}
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
    topChild: PropTypes.node,
    children: PropTypes.node,
}

export default Board
