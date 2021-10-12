import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { updateCurrentPitchSet } from '../../../../redux/chords/action'
import { mapCurrentPitchSet } from '../../../../redux/chords/selector'
import transpose from '../../../../assets/svgs/chords/transpose'
import styleConfigOption from '../../../../styles/checker/option'
import { transposePitchSet } from '../../../../utils/chords/math'

const TransposeButton = ({ direction }) => {
    const
        dispatch = useDispatch(),
        currentPitchSet = useSelector(mapCurrentPitchSet)

    const onClick = () => {
        dispatch(updateCurrentPitchSet(
            transposePitchSet(currentPitchSet, direction),
        ))
    }

    return (
        <CheckerButton
            {...{
                faceSrc: transpose,
                reverse: direction === -1,
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
