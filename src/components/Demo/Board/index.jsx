import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import Domino from '../Domino'
import { mapBoard } from '../../../redux/game/selector'
import { getZIndexDominoesList } from '../../../utils/music/render/board/zIndex'
import './style'

const Board = () => {
    const board = useSelector(mapBoard)

    return (
        <Flex
            {...{
                className: cx(
                    'Board',
                ),
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
                    }}
                >
                    {getZIndexDominoesList(board).map(move => {
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
