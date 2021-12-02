import React from 'react'
import PlayerCard from './PlayerCard'
import { getArrayOfIndices } from '../../../utils/general'
import { PLAYERS_COUNT } from '../../../constants/music/demo'
import './style'

const PlayerCards = () => (
    <div
        {...{
            className: 'PlayerCards',
        }}
    >
        {getArrayOfIndices(PLAYERS_COUNT).map(playerIndex => (
            <PlayerCard {...{ key: playerIndex, playerIndex }} />
        ))}
    </div>
)

export default PlayerCards
