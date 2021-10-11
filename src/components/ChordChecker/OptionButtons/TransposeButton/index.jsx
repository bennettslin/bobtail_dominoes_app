import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import StyledCheckerButton from '../../../Styled/CheckerButton'
import DominoSvg from '../../../Svgs/Domino'
import { updateCurrentPitchSet } from '../../../../redux/chords/action'
import { mapCurrentPitchSet } from '../../../../redux/chords/selector'
import cPitchButton from '../../../../assets/svgs/chords/cPitchButton'
import { transpose } from '../../../../utils/chords/math'

const TransposeButton = ({ direction }) => {
    const
        dispatch = useDispatch(),
        currentPitchSet = useSelector(mapCurrentPitchSet)

    const handleButtonClick = () => {
        dispatch(updateCurrentPitchSet(
            transpose(currentPitchSet, direction),
        ))
    }

    return (
        <StyledCheckerButton
            {...{
                className: cx(
                    'TransposeButton',
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

TransposeButton.propTypes = {
    direction: PropTypes.oneOf([-1, 1]).isRequired,
}

export default TransposeButton
