import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import './style'

const StyledTabButton = ({
    className,
    ...rest
}) => (
    <Button
        {...{
            className: cx(
                'StyledTabButton',
                className,
            ),
            ...rest,
        }}
    />
)

StyledTabButton.propTypes = {
    className: PropTypes.string,
}

export default StyledTabButton
