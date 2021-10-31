import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import PlayerCard from './PlayerCard'
import { margin__xs } from '../../../constants/responsive'
import { mapPlayersCount } from '../../../redux/game/selector'
import { getArrayOfIndices } from '../../../utils/general'

const PlayerCards = () => {
    const playersCount = useSelector(mapPlayersCount)

    return (
        <Flex
            {...{
                className: 'PlayerCards',
                flexDirection: 'column',
                alignItems: 'normal',
                gap: margin__xs,
            }}
        >
            {getArrayOfIndices(playersCount).map(playerIndex => (
                <PlayerCard {...{ key: playerIndex, playerIndex }} />
            ))}
        </Flex>
    )
}

export default PlayerCards
