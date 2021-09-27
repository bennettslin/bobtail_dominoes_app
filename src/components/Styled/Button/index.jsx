import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import './style'

const StyledButton = ({
    className,
    ...rest
}) => (
    <Button
        {...{
            className: cx(
                'StyledButton',
                className,
            ),
            ...rest,
        }}
    />
)

StyledButton.propTypes = {
    className: PropTypes.string,
}

export default StyledButton
