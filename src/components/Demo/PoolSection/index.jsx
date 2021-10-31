import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import { mapPool } from '../../../redux/game/selector'
import { getDominoLabel } from '../../../utils/music/chords/label'
import { getDominoPitches } from '../../../utils/music/game/dominoes'

const PoolSection = () => {
    const pool = useSelector(mapPool)

    return (
        <Flex
            {...{
                className: 'PoolSection',
            }}
        >
            Pool:
            {Array.from(pool).map(dominoIndex => (
                getDominoLabel(getDominoPitches(dominoIndex))
            ))}
        </Flex>
    )
}

export default PoolSection
