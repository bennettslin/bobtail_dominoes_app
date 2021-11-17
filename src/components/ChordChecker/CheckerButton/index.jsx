import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import ArcadeButton from '../../ArcadeButton'
import { mapHasSonority } from '../../../redux/audio/selector'

const CheckerButton = ({
    enableWithSonority,
    disabled,
    ...rest
}) => {
    const hasSonority = useSelector(mapHasSonority)

    return (
        <ArcadeButton
            {...{
                disabled: enableWithSonority ?
                    !hasSonority || disabled :
                    disabled,
                ...rest,
            }}
        />
    )
}

CheckerButton.propTypes = {
    enableWithSonority: PropTypes.bool,
    disabled: PropTypes.bool,
}

export default CheckerButton
