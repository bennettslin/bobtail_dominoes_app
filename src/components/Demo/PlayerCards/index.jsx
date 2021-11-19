import React from 'react'
import Flex from '../../Flex'
import PlayerCard from './PlayerCard'
import { getArrayOfIndices } from '../../../utils/general'
import { PLAYERS_COUNT } from '../../../constants/music/play'
import './style'

const PlayerCards = () => (
    <Flex
        {...{
            className: 'PlayerCards',
            flexWrap: 'wrap',
            flexGrow: 1,
            gap: 'xs',
        }}
    >
        {getArrayOfIndices(PLAYERS_COUNT).map(playerIndex => (
            <PlayerCard {...{ key: playerIndex, playerIndex }} />
        ))}
    </Flex>
)

export default PlayerCards
