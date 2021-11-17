import React from 'react'
import { useDispatch } from 'react-redux'
import ArcadeButton from '../../../ArcadeButton'
import { updateCurrentPitchSet } from '../../../../redux/audio/action'
import faceTranspose from '../../../../assets/svgs/checker/faceTranspose'
import styleConfigReset from '../../../../styles/arcade/reset'
import styleConfigFacesReset from '../../../../styles/faces/reset'

const ResetButton = () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(updateCurrentPitchSet())
    }

    return (
        <ArcadeButton
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
