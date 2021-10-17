import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { updateTransposedPitchSet } from '../../../../redux/chords/action'
import styleConfigOption from '../../../../styles/checker/option'
import transpose from '../../../../assets/svgs/chords/transpose'

const TransposeButton = ({ direction }) => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(updateTransposedPitchSet(direction))
    }

    return (
        <CheckerButton
            enableWithSonority
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
