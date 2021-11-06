import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import PoolInterval from './PoolInterval'
import PoolPitch from './PoolPitch'
import { mapPool } from '../../../redux/game/selector'
import { getIntervalCountsInPool, getPitchCountsInPool } from '../../../utils/music/game/statistics'
import './style'

const Pool = () => {
    const pool = useSelector(mapPool)

    return (
        <Flex
            {...{
                className: 'Pool',
                flexDirection: 'column',
                flexGrow: 1,
                style: {
                    backgroundColor: '#bdd',
                },
            }}
        >
            <Flex
                {...{
                    gap: 'sm',
                }}
            >
                {getPitchCountsInPool(pool).map((pitchCount, pitch) => (
                    <PoolPitch
                        {...{
                            key: pitch,
                            pitch,
                            pitchCount,
                        }}
                    />
                ))}
            </Flex>
            <Flex
                {...{
                    gap: 'sm',
                }}
            >
                {getIntervalCountsInPool(pool).map((intervalCount, index) => (
                    <PoolInterval
                        {...{
                            key: index,
                            interval: index + 1,
                            intervalCount,
                        }}
                    />
                ))}
            </Flex>
        </Flex>
    )
}

export default Pool
