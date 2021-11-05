import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import Domino from '../Domino'
import { mapBoard } from '../../../redux/game/selector'
import './style'

const Board = () => {
    const board = useSelector(mapBoard)

    return (
        <Flex
            {...{
                className: 'Board',
                style: {
                    backgroundColor: '#dbb',
                },
            }}
        >
            {Array.from(board).map(move => {
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
