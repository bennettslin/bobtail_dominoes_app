import React from 'react'
import { useDispatch } from 'react-redux'
import CheckerButton from '../../../ChordChecker/CheckerButton'
import { updateCurrentPitchSet } from '../../../../redux/audio/action'
import faceTranspose from '../../../../assets/svgs/checker/faceTranspose'
import styleConfigReset from '../../../../styles/checker/reset'
import styleConfigFacesReset from '../../../../styles/faces/reset'

const ResetButton = () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(updateCurrentPitchSet())
    }

    return (
        <CheckerButton
            {...{
                faceSrc: faceTranspose,
                styleConfig: styleConfigReset,
                faceStyleConfig: styleConfigFacesReset,
                onClick,
            }}
        />
    )
}

export default ResetButton
