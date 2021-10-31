import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import { mapPool } from '../../../redux/game/selector'
import { getDominoLabel } from '../../../utils/music/chords/label'
import { getDominoPitches } from '../../../utils/music/game/dominoes'
import './style'

const Pool = () => {
    const pool = useSelector(mapPool)

    return (
        <Flex
            {...{
                className: 'Pool',
                flexGrow: 1,
                style: {
                    border: '1px solid pink',
                },
            }}
        >
            Pool:
            {Array.from(pool).map(dominoIndex => (
                getDominoLabel(getDominoPitches(dominoIndex))
            )).join(' ')}
        </Flex>
    )
}

export default Pool
