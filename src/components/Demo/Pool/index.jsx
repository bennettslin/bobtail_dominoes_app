import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import Domino from '../Domino'
import { mapPool } from '../../../redux/game/selector'
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
            {Array.from(pool).map(dominoIndex => (
                <Domino {...{ key: dominoIndex, dominoIndex }} />
            ))}
        </Flex>
    )
}

export default Pool
