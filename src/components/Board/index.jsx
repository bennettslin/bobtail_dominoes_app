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
    hand,
    boardHexagonalWidth,
    boardHexagonalBaseWidth,
    DominoComponent = Domino,
    topChild,
    bottomChild,
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
        {bottomChild && (
            <Flex>
                {bottomChild}
            </Flex>
        )}
        {hand && (
            <Flex>
                    Hello there
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
    hand: PropTypes.object,
    boardHexagonalWidth: PropTypes.number,
    boardHexagonalBaseWidth: PropTypes.number,
    topChild: PropTypes.node,
    bottomChild: PropTypes.node,
    DominoComponent: PropTypes.func,
}

export default Board
