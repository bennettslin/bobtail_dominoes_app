import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import Domino from '../Domino'
import { mapBoard } from '../../../redux/game/selector'
import { getZIndexSortedDominoesList } from './utils/zIndex'
import './style'

const Board = () => {
    const board = useSelector(mapBoard)

    return (
        <Flex
            {...{
                className: 'Board',
                flexWrap: 'wrap',
                style: {
                    backgroundColor: '#dbb',
                },
            }}
        >
            {getZIndexSortedDominoesList(board).map(move => {
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
        </Flex>
    )
}

export default Board
