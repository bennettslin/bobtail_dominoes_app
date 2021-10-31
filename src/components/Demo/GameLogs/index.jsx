import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import TurnLog from './TurnLog'
import { mapHandCount, mapPlayersCount, mapTurns } from '../../../redux/game/selector'
import { getArrayOfIndices } from '../../../utils/general'
import { margin__xs } from '../../../constants/responsive'
import './style'

const GameLogs = () => {
    const
        turns = useSelector(mapTurns),
        playersCount = useSelector(mapPlayersCount),
        handCount = useSelector(mapHandCount)

    return (
        <Flex
            {...{
                className: 'GameLogs',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                gap: margin__xs,
            }}
        >
            {getArrayOfIndices(turns.length).map(turnIndex => (
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
