import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import PlayerCard from './PlayerCard'
import { mapPlayersCount } from '../../../redux/game/selector'
import { getArrayOfIndices } from '../../../utils/general'
import './style'

const PlayerCards = () => {
    const playersCount = useSelector(mapPlayersCount)

    return (
        <Flex
            {...{
                className: 'PlayerCards',
                flexWrap: 'wrap',
                flexGrow: 1,
                gap: 'xs',
            }}
        >
            {getArrayOfIndices(playersCount).map(playerIndex => (
                <PlayerCard {...{ key: playerIndex, playerIndex }} />
            ))}
        </Flex>
    )
}

export default PlayerCards
