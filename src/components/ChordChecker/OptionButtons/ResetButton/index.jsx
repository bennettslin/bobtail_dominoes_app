import React from 'react'
import { useDispatch } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { updateCurrentPitchSet } from '../../../../redux/audio/action'
import styleConfigReset from '../../../../styles/arcade/reset'
import styleConfigFacesReset from '../../../../styles/faces/reset'
import faceReset from '../../../../assets/svgs/checker/faceReset'

const ResetButton = () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(updateCurrentPitchSet())
    }

    return (
        <CheckerButton
            enableWithSonority
            {...{
                faceSrc: faceReset,
                styleConfig: styleConfigReset,
                faceStyleConfig: styleConfigFacesReset,
                onClick,
            }}
        />
    )
}

export default ResetButton
