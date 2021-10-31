import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import { mapBoard } from '../../../redux/game/selector'
import { getDominoLabel } from '../../../utils/music/chords/label'
import { getDominoPitches } from '../../../utils/music/game/dominoes'

const Board = () => {
    const board = useSelector(mapBoard)

    return (
        <Flex
            {...{
                className: 'Board',
            }}
        >
            Board:
            {Array.from(board).map(move => {
                const { dominoIndex, placement } = move
                return (
                    `${getDominoLabel(getDominoPitches(dominoIndex))} on [[${placement[0][0]}, ${placement[0][1]}], [${placement[1][0]}, ${placement[1][1]}]]`
                )
            })}
        </Flex>
    )
}

export default Board
