import React from 'react'
import { useDispatch } from 'react-redux'
import StyledCheckerButton from '../../../Styled/CheckerButton'
import { updateCurrentPitchSet } from '../../../../redux/chords/action'
import pitchReset from '../../../../assets/svgs/chords/pitchReset'
import styleConfigReset from '../../../../styles/checker/reset'

const ResetButton = () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(updateCurrentPitchSet(new Set()))
    }

    return (
        <StyledCheckerButton
            {...{
                faceSrc: pitchReset,
                styleConfig: styleConfigReset,
                onClick,
            }}
        />
    )
}

export default ResetButton
