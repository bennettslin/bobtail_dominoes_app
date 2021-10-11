import React from 'react'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import StyledCheckerButton from '../../../Styled/CheckerButton'
import DominoSvg from '../../../Svgs/Domino'
import { updateCurrentPitchSet } from '../../../../redux/chords/action'
import cPitchButton from '../../../../assets/svgs/chords/cPitchButton'

const ResetButton = () => {
    const dispatch = useDispatch()

    const handleButtonClick = () => {
        dispatch(updateCurrentPitchSet(new Set()))
    }

    return (
        <StyledCheckerButton
            {...{
                className: cx(
                    'ResetButton',
                ),
                handleButtonClick,
            }}
        >
            <DominoSvg
                {...{
                    src: cPitchButton,
                    isFigure: false,
                }}
            />
        </StyledCheckerButton>
    )
}

export default ResetButton
