import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { updateCheckerPitchSet } from '../../../../redux/checker/action'
import { mapHasCheckerSonority } from '../../../../redux/checker/selector'
import styleConfigReset from '../../../../styles/arcade/reset'
import styleConfigFacesReset from '../../../../styles/faces/reset'
import faceReset from '../../../../assets/svgs/checker/faceReset'

const ResetButton = () => {
    const
        dispatch = useDispatch(),
        hasCheckerSonority = useSelector(mapHasCheckerSonority)

    const onClick = () => {
        dispatch(updateCheckerPitchSet())
    }

    return (
        <CheckerButton
            {...{
                faceSrc: faceReset,
                styleConfig: styleConfigReset,
                faceStyleConfig: styleConfigFacesReset,
                disabled: !hasCheckerSonority,
                onClick,
            }}
        />
    )
}

export default ResetButton
