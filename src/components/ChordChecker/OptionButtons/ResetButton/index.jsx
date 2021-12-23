import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { updateCurrentPitchSet } from '../../../../redux/audio/action'
import { mapHasSonority } from '../../../../redux/audio/selector'
import styleConfigReset from '../../../../styles/arcade/reset'
import styleConfigFacesReset from '../../../../styles/faces/reset'
import faceReset from '../../../../assets/svgs/checker/faceReset'

const ResetButton = () => {
    const
        dispatch = useDispatch(),
        hasSonority = useSelector(mapHasSonority)

    const onClick = () => {
        dispatch(updateCurrentPitchSet())
    }

    return (
        <CheckerButton
            {...{
                faceSrc: faceReset,
                styleConfig: styleConfigReset,
                faceStyleConfig: styleConfigFacesReset,
                disabled: !hasSonority,
                onClick,
            }}
        />
    )
}

export default ResetButton
