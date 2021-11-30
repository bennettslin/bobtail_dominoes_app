import React from 'react'
import { useSelector } from 'react-redux'
import Board from '../../Board'
import DemoDomino from '../Domino'
import {
    mapBoard,
    mapBoardHexagonalWidth,
} from '../../../redux/game/selector'
import './style'

const DemoBoard = () => {
    const
        board = useSelector(mapBoard),
        boardHexagonalWidth = useSelector(mapBoardHexagonalWidth)

    return (
        <Board
            {...{
                className: 'DemoBoard',
                board,
                boardHexagonalWidth,
                order: 2,
                DominoComponent: DemoDomino,
            }}
        />
    )
}

export default DemoBoard
