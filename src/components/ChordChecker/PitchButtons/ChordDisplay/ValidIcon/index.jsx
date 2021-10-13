import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import DominoSvg from '../../../../Svgs/Domino'
import { mapCurrentPitchSet } from '../../../../../redux/chords/selector'
import { getIsChord, getIsIllegalRow } from '../../../../../utils/chords/valid'
import iconValid from '../../../../../assets/svgs/chords/iconValid'
import iconInvalid from '../../../../../assets/svgs/chords/iconInvalid'
import './style'

const ValidIcon = () => {
    const currentPitchSet = useSelector(mapCurrentPitchSet),
        isChord = getIsChord(currentPitchSet)

    return (getIsIllegalRow(currentPitchSet) || isChord) && (
        <DominoSvg
            {...{
                key: isChord,
                className: cx(
                    'ValidIcon',
                ),
                src: isChord ? iconValid : iconInvalid,
                isFigure: false,
            }}
        />
    )
}

export default ValidIcon
