import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ArcadeButton from '../../ArcadeButton'
import { mapHasSonority } from '../../../redux/audio/selector'
import './style'

const CheckerButton = ({
    className,
    enableWithSonority,
    disabled,
    ...rest
}) => {
    const hasSonority = useSelector(mapHasSonority)

    return (
        <ArcadeButton
            {...{
                className: cx(
                    'CheckerButton',
                    className,
                ),
                disabled: enableWithSonority ?
                    !hasSonority || disabled :
                    disabled,
                ...rest,
            }}
        />
    )
}

CheckerButton.propTypes = {
    className: PropTypes.string,
    enableWithSonority: PropTypes.bool,
    disabled: PropTypes.bool,
}

export default CheckerButton
