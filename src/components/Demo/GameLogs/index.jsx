import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import TurnLog from './TurnLog'
import { mapHandCount, mapPlayersCount, mapTurnsCount } from '../../../redux/game/selector'
import { getArrayOfIndices } from '../../../utils/general'
import './style'

const GameLogs = () => {
    const
        turnsCount = useSelector(mapTurnsCount),
        playersCount = useSelector(mapPlayersCount),
        handCount = useSelector(mapHandCount)

    return (
        <Flex
            {...{
                className: 'GameLogs',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                gap: 'xs',
                style: {
                    border: '1px solid yellow',
                },
            }}
        >
            {getArrayOfIndices(turnsCount).map(turnIndex => (
                <Flex
                    {...{
                        key: turnIndex,
                        flexDirection: 'column',
                        alignItems: 'normal',
                    }}
                >
                    <TurnLog {...{
                        key: turnIndex,
                        turnIndex,
                        playersCount,
                        handCount,
                    }} />
                </Flex>
            ))}
        </Flex>
    )
}

export default GameLogs
