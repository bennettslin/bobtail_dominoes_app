import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import Svg from '../../Svg'
import { getDominoPitches } from '../../../utils/music/game/dominoes'
import { getOrientation } from '../../../utils/music/game/placement/orientation'
import { getFacePositionAndSizeStyling } from '../../../utils/music/render/face'
import { getDominoSrc } from '../../../utils/src/dominoes'
import { getFaceSrc } from '../../../utils/src/faces'
import styleConfigFaces from '../../../styles/checker/faces'
import styleConfigDominoes from '../../../styles/dominoes'
import { DIRECTION_X } from '../../../constants/music/game'
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
                    orientation === DIRECTION_X ?
                        'Domino__horizontal' :
                        'Domino__vertical',
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
