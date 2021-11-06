import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import Svg from '../../Svg'
import { mapPool } from '../../../redux/game/selector'
import { getFaceSrc } from '../../ChordChecker/PitchButtons/PitchButton/util'
import { getIntervalCountsInPool, getPitchCountsInPool } from '../../../utils/music/game/statistics'
import styleConfigFaces from '../../../styles/checker/faces'
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
            <Flex>
                {getPitchCountsInPool(pool).map((pitchCount, pitch) => (
                    <div {...{ key: pitch }} >
                        <Svg
                            {...{
                                src: getFaceSrc(pitch),
                                styleConfig: styleConfigFaces,
                            }}
                        />
                        {pitchCount}
                    </div>
                ))}
            </Flex>
            <Flex>
                {getIntervalCountsInPool(pool).map((intervalCount, index) => (
                    <div {...{ key: index }} >
                        <Svg
                            {...{
                                src: getFaceSrc(index + 1),
                                styleConfig: styleConfigFaces,
                            }}
                        />
                        {intervalCount}
                    </div>
                ))}
            </Flex>
        </Flex>
    )
}

export default Pool
