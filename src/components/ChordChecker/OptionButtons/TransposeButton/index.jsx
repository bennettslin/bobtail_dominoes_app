import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { updateTransposedPitchSet } from '../../../../redux/audio/action'
import { mapHasSonority } from '../../../../redux/audio/selector'
import styleConfigOption from '../../../../styles/arcade/option'
import styleConfigFacesOption from '../../../../styles/faces/option'
import faceTranspose from '../../../../assets/svgs/checker/faceTranspose'

const TransposeButton = ({ direction }) => {
    const
        dispatch = useDispatch(),
        hasSonority = useSelector(mapHasSonority)

    const onClick = () => {
        dispatch(updateTransposedPitchSet(direction))
    }

    return (
        <CheckerButton
            {...{
                faceSrc: faceTranspose,
                reverse: direction === -1,
                styleConfig: styleConfigOption,
                faceStyleConfig: styleConfigFacesOption,
                disabled: !hasSonority,
                onClick,
            }}
        />
    )
}

TransposeButton.propTypes = {
    direction: PropTypes.oneOf([-1, 1]).isRequired,
}

export default TransposeButton
