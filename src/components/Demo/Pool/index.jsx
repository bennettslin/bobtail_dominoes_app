import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import { mapPool } from '../../../redux/game/selector'
import { getDominoLabel } from '../../../utils/music/chords/label'
import './style'

const Pool = () => {
    const pool = useSelector(mapPool)

    return (
        <Flex
            {...{
                className: 'Pool',
                flexGrow: 1,
                style: {
                    backgroundColor: '#bdd',
                },
            }}
        >
            Pool:
            {Array.from(pool).map(dominoIndex => (
                getDominoLabel(dominoIndex)
            )).join(' ')}
        </Flex>
    )
}

export default Pool
