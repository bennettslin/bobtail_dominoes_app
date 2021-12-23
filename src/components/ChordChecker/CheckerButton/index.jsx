import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ArcadeButton from '../../ArcadeButton'
import './style'

const CheckerButton = ({
    className,
    ...rest
}) => (
    <ArcadeButton
        {...{
            className: cx(
                'CheckerButton',
                className,
            ),
            ...rest,
        }}
    />
)

CheckerButton.propTypes = {
    className: PropTypes.string,
}

export default CheckerButton
