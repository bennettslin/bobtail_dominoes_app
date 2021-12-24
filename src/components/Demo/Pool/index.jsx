import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import DominoCard from '../../DominoCard'
import Flex from '../../Flex'
import StyledShadow from '../../Styled/Shadow'
import PoolInterval from './PoolInterval'
import PoolPitch from './PoolPitch'
import { mapPool } from '../../../redux/game/selector'
import { getIntervalCountsInPool, getPitchCountsInPool } from '../../../utils/music/mechanics/statistics'
import { OCTAVE_RANGE } from '../../../constants/music/audio'
import './style'

const Pool = () => {
    const
        pool = useSelector(mapPool),
        pitchCountsList = getPitchCountsInPool(pool)

    return (
        <DominoCard
            {...{
                className: cx(
                    'Pool',
                ),
                label: (
                    <Flex
                        {...{
                            className: cx(
                                'Pool__label',
                                'labelFontSize__md',
                            ),
                        }}
                    >
                        <StyledShadow isInset isGold>
                            pool
                        </StyledShadow>
                    </Flex>
                ),
                flexGrow: 1,
            }}
        >
            <Flex
                {...{
                    flexDirection: 'column',
                    gap: 'md',
                }}
            >
                <Flex {...{ flexDirection: 'column', gap: 'xs' }}>
                    {[
                        pitchCountsList.slice(0, OCTAVE_RANGE / 2),
                        pitchCountsList.slice(OCTAVE_RANGE / 2),
                    ].map((list, index) => (
                        <div
                            {...{
                                key: index,
                                className: cx(
                                    'Pool__row',
                                ),
                            }}
                        >
                            {list.map((pitchCount, pitch) => (
                                <PoolPitch
                                    {...{
                                        key: pitch,
                                        pitch: pitch + (index ? OCTAVE_RANGE / 2 : 0),
                                        pitchCount,
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </Flex>
                <div
                    {...{
                        className: cx(
                            'Pool__row',
                        ),
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
                </div>
            </Flex>
        </DominoCard>
    )
}

export default Pool
