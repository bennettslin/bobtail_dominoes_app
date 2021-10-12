import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import DominoSvg from '../../../../Svgs/Domino'
import { mapCurrentPitchSet } from '../../../../../redux/chords/selector'
import { getIsChord, getIsLegalRow } from '../../../../../utils/chords/valid'
import iconValid from '../../../../../assets/svgs/chords/iconValid'
import iconInvalid from '../../../../../assets/svgs/chords/iconInvalid'
import './style'

const ValidIcon = () => {
    const currentPitchSet = useSelector(mapCurrentPitchSet)

    return (!getIsLegalRow(currentPitchSet) || getIsChord(currentPitchSet)) && (
        <DominoSvg
            {...{
                key: getIsChord(currentPitchSet),
                className: cx(
                    'ValidIcon',
                ),
                src: getIsChord(currentPitchSet) ? iconValid : iconInvalid,
                isFigure: false,
            }}
        />
    )
}

export default ValidIcon
