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
import { boardPropTypes } from '../../constants/propTypes'
import './style'

const Board = ({
    className,
    isDemo,
    board,
    boardHexagonalWidth,
    boardHexagonalBaseWidth,
    isThumbnail,
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
            ...!isDemo && {
                flexDirection: 'column',
            },
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
                {getBoardOrderedByZIndex(board).map(({
                    dominoIndex,
                    ...rest
                }) => (
                    <DominoComponent
                        {...{
                            key: dominoIndex,
                            dominoIndex,
                            boardHexagonalBaseWidth,
                            isThumbnail,
                            ...rest,
                        }}
                    />
                ))}
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
    isDemo: PropTypes.bool,
    isThumbnail: PropTypes.bool,
    board: boardPropTypes.isRequired,
    boardHexagonalWidth: PropTypes.number,
    boardHexagonalBaseWidth: PropTypes.number,
    DominoComponent: PropTypes.func,
    topChild: PropTypes.node,
    children: PropTypes.node,
}

export default Board
