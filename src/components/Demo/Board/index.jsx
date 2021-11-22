import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import Domino from '../Domino'
import {
    mapBoard,
    mapBoardHexagonalWidth,
} from '../../../redux/game/selector'
import { getBoardOrderedByZIndex } from '../../../utils/music/render/board/zIndex'
import { getBoardPositionStyling } from '../../../utils/music/render/board/position'
import { getBoardSizeStyling } from '../../../utils/music/render/board/size'
import './style'

const Board = () => {
    const
        board = useSelector(mapBoard),
        boardHexagonalWidth = useSelector(mapBoardHexagonalWidth)

    return (
        <Flex
            {...{
                className: cx(
                    'Board',
                ),
                order: 2,
            }}
        >
            <Flex
                {...{
                    className: cx(
                        'Board__square',
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
                            <Domino
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
}

export default Board
