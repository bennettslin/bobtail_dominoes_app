import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import Domino from '../Domino'
import { mapBoard } from '../../../redux/game/selector'
import { getZIndexDominoesList } from '../../../utils/music/render/board/zIndex'
import './style'
import { getDominoLabel } from '../../../utils/music/chords/label'

const Board = () => {
    const board = useSelector(mapBoard)

    console.log('board', board.map(move => (
        `${getDominoLabel(move.dominoIndex)}: ${JSON.stringify(move.placement)}`
    )))

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
        </Flex>
    )
}

export default Board
