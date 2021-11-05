import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import Svg from '../../Svg'
import { getDominoPitches } from '../../../utils/music/game/dominoes'
import { getFaceSrc } from '../../ChordChecker/PitchButtons/PitchButton/util'
import styleConfigFaces from '../../../styles/checker/faces'
import './style'
import { getOrientation } from '../../../utils/music/game/placement/orientation'

const Domino = ({
    dominoIndex,
    placement,
}) => {
    const
        pitches = getDominoPitches(dominoIndex),
        orientation = getOrientation(placement)

    return (
        <Flex
            {...{
                className: cx(
                    'Domino',
                ),
            }}
        >
            {pitches.map(pitch => (
                <Svg
                    {...{
                        key: pitch,
                        src: getFaceSrc(pitch),
                        styleConfig: styleConfigFaces,
                    }}
                />
            ))}
        </Flex>
    )
}

Domino.propTypes = {
    dominoIndex: PropTypes.number.isRequired,
    placement: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number.isRequired,
        ).isRequired,
    ),
}

export default Domino
