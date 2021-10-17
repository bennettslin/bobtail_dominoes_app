import React from 'react'
import { useDispatch } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { updateCurrentPitchSet } from '../../../../redux/chords/action'
import styleConfigReset from '../../../../styles/checker/reset'
import faceReset from '../../../../assets/svgs/chords/faceReset'

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
                onClick,
            }}
        />
    )
}

export default ResetButton
