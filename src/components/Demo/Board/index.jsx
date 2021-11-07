import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import Svg from '../../Svg'
import Domino from '../Domino'
import { mapBoard } from '../../../redux/game/selector'
import { getZIndexDominoesList } from '../../../utils/music/render/board/zIndex'
import boardSvg from '../../../assets/svgs/dominoes/board'
import './style'

const Board = () => {
    const board = useSelector(mapBoard)

    return (
        <Flex
            {...{
                className: cx(
                    'Board__container',
                ),
                style: {
                    backgroundColor: '#bdb',
                },
            }}
        >
            <Flex
                {...{
                    className: 'Board',
                    flexWrap: 'wrap',
                    style: {
                        backgroundColor: '#dbb',
                    },
                }}
            >
                <Svg
                    {...{
                        className: 'BoardSvg',
                        src: boardSvg,
                    }}
                />
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
        </Flex>
    )
}

export default Board
