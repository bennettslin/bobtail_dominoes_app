import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { transposeCheckerPitchSet } from '../../../../redux/checker/action'
import { mapHasCheckerSonority } from '../../../../redux/checker/selector'
import styleConfigOption from '../../../../styles/arcade/option'
import styleConfigFacesOption from '../../../../styles/faces/option'
import faceTranspose from '../../../../assets/svgs/checker/faceTranspose'

const TransposeButton = ({ direction }) => {
    const
        dispatch = useDispatch(),
        hasCheckerSonority = useSelector(mapHasCheckerSonority)

    const onClick = () => {
        dispatch(transposeCheckerPitchSet(direction))
    }

    return (
        <CheckerButton
            {...{
                faceSrc: faceTranspose,
                reverse: direction === -1,
                styleConfig: styleConfigOption,
                faceStyleConfig: styleConfigFacesOption,
                disabled: !hasCheckerSonority,
                onClick,
            }}
        />
    )
}

TransposeButton.propTypes = {
    direction: PropTypes.oneOf([-1, 1]).isRequired,
}

export default TransposeButton
