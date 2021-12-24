import React from 'react'
import { useSelector } from 'react-redux'
import Board from '../../Board'
import DemoDomino from '../Domino'
import {
    mapBoard,
    mapBoardHexagonalWidth,
} from '../../../redux/game/selector'
import { DEMO_BOARD_HEXAGON_WIDTH } from '../../../constants/music/demo'
import './style'

const DemoBoard = () => {
    const
        board = useSelector(mapBoard),
        boardHexagonalWidth = useSelector(mapBoardHexagonalWidth)

    return (
        <Board
            isDemo
            {...{
                className: 'DemoBoard',
                board,
                boardHexagonalWidth,
                boardHexagonalBaseWidth: DEMO_BOARD_HEXAGON_WIDTH,
                DominoComponent: DemoDomino,
                order: 2,
            }}
        />
    )
}

export default DemoBoard
