import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import StyledCheckerButton from '../../../Styled/CheckerButton'
import { updateCurrentPitchSet } from '../../../../redux/chords/action'
import { mapCurrentPitchSet } from '../../../../redux/chords/selector'
import transposeUp from '../../../../assets/svgs/chords/transposeUp'
import transposeDown from '../../../../assets/svgs/chords/transposeDown'
import styleConfigOption from '../../../../styles/checker/option'
import { transpose } from '../../../../utils/chords/math'

const TransposeButton = ({ direction }) => {
    const
        dispatch = useDispatch(),
        currentPitchSet = useSelector(mapCurrentPitchSet)

    const onClick = () => {
        dispatch(updateCurrentPitchSet(
            transpose(currentPitchSet, direction),
        ))
    }

    return (
        <StyledCheckerButton
            {...{
                faceSrc: direction === 1 ? transposeUp : transposeDown,
                styleConfig: styleConfigOption,
                onClick,
            }}
        />
    )
}

TransposeButton.propTypes = {
    direction: PropTypes.oneOf([-1, 1]).isRequired,
}

export default TransposeButton
