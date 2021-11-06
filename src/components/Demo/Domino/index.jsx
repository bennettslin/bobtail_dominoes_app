import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import Svg from '../../Svg'
import { getFaceSrc } from '../../ChordChecker/PitchButtons/PitchButton/util'
import { getDominoPitches } from '../../../utils/music/game/dominoes'
import { getOrientation } from '../../../utils/music/game/placement/orientation'
import { getDominoSrc } from './utils/src'
import { getFacePositionAndSizeStyling } from './utils/face'
import styleConfigFaces from '../../../styles/checker/faces'
import styleConfigDominoes from '../../../styles/dominoes'
import { DIRECTION_X, DIRECTION_XY, DIRECTION_Y } from '../../../constants/music/game'
import './style'

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
                    orientation === DIRECTION_X && 'Domino__orientationX',
                    orientation === DIRECTION_Y && 'Domino__orientationY',
                    orientation === DIRECTION_XY && 'Domino__orientationXY',
                ),
            }}
        >
            <Svg
                {...{
                    src: getDominoSrc(orientation),
                    styleConfig: styleConfigDominoes,
                }}
            />
            {pitches.map((pitch, pitchIndex) => (
                <Svg
                    {...{
                        key: pitch,
                        className: cx(
                            'Domino__face',
                        ),
                        src: getFaceSrc(pitch),
                        styleConfig: styleConfigFaces,
                        style: getFacePositionAndSizeStyling({
                            pitchIndex,
                            orientation,
                        }),
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
