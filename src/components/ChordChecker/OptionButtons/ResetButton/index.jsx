import React from 'react'
import { useDispatch } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { updateCurrentPitchSet } from '../../../../redux/chords/action'
import pitchReset from '../../../../assets/svgs/chords/pitchReset'
import styleConfigReset from '../../../../styles/checker/reset'

const ResetButton = () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(updateCurrentPitchSet(new Set()))
    }

    return (
        <CheckerButton
            {...{
                faceSrc: pitchReset,
                styleConfig: styleConfigReset,
                onClick,
            }}
        />
    )
}

export default ResetButton
