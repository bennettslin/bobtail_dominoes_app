import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { updateCurrentPitchSet } from '../../../../redux/chords/action'
import { mapCurrentPitchSet } from '../../../../redux/chords/selector'
import faceC from '../../../../assets/svgs/chords/faceC'
import faceCD from '../../../../assets/svgs/chords/faceCD'
import faceD from '../../../../assets/svgs/chords/faceD'
import faceDE from '../../../../assets/svgs/chords/faceDE'
import faceE from '../../../../assets/svgs/chords/faceE'
import faceF from '../../../../assets/svgs/chords/faceF'
import faceFG from '../../../../assets/svgs/chords/faceFG'
import faceG from '../../../../assets/svgs/chords/faceG'
import faceGA from '../../../../assets/svgs/chords/faceGA'
import faceA from '../../../../assets/svgs/chords/faceA'
import faceAB from '../../../../assets/svgs/chords/faceAB'
import faceB from '../../../../assets/svgs/chords/faceB'
import './style'

const
    COORDINATES = [0, 6.7, 25, 50, 75, 93.3, 100],
    FACES = [faceC, faceCD, faceD, faceDE, faceE, faceF, faceFG, faceG, faceGA, faceA, faceAB, faceB]

const PitchButton = ({ pitch }) => {
    const
        dispatch = useDispatch(),
        currentPitchSet = useSelector(mapCurrentPitchSet),
        isOn = currentPitchSet.has(pitch)

    const onClick = () => {
        const newPitchSet = new Set(currentPitchSet)
        if (isOn) {
            newPitchSet.delete(pitch)
        } else {
            newPitchSet.add(pitch)
        }

        dispatch(updateCurrentPitchSet(newPitchSet))
    }

    return (
        <CheckerButton
            {...{
                className: cx(
                    'PitchButton',
                ),
                faceSrc: FACES[pitch],
                style: {
                    top: `${COORDINATES[6 - Math.abs(6 - pitch)]}%`,
                    left: `${COORDINATES[Math.abs(6 - (pitch + 9) % 12)]}%`,
                },
                isOn,
                onClick,
            }}
        />
    )
}

PitchButton.propTypes = {
    pitch: PropTypes.number.isRequired,
}

export default PitchButton
