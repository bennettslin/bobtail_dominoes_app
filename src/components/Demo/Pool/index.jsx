import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import PoolInterval from './PoolInterval'
import PoolPitch from './PoolPitch'
import { mapPool } from '../../../redux/game/selector'
import { getIntervalCountsInPool, getPitchCountsInPool } from '../../../utils/music/game/statistics'
import { OCTAVE_RANGE } from '../../../constants/music/audio'
import './style'

const Pool = () => {
    const
        pool = useSelector(mapPool),
        pitchCountsList = getPitchCountsInPool(pool)

    return (
        <Flex
            {...{
                className: 'Pool',
                flexDirection: 'column',
                flexGrow: 1,
                gap: 'md',
            }}
        >
            <Flex {...{ flexDirection: 'column', gap: 'xs' }}>
                {[
                    pitchCountsList.slice(0, OCTAVE_RANGE / 2),
                    pitchCountsList.slice(OCTAVE_RANGE / 2),
                ].map((list, index) => (
                    <Flex {...{ key: index, gap: 'sm' }}>
                        {list.map((pitchCount, pitch) => (
                            <PoolPitch
                                {...{
                                    key: pitch,
                                    pitch: pitch + (index ? OCTAVE_RANGE / 2 : 0),
                                    pitchCount,
                                }}
                            />
                        ))}
                    </Flex>
                ))}
            </Flex>
            <Flex {...{ gap: 'sm' }}>
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
