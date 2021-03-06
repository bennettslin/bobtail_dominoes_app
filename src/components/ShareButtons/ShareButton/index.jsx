import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import './style'

const ShareButton = forwardRef(({
    className,
    id,
    handleButtonClick,
    children,
    ...rest

}, ref) => (
    <Button
        dropShadow
        {...{
            ref,
            className: cx(
                'ShareButton',
                className,
            ),
            analyticsLabel: `ShareButton__${id}`,
            handleButtonClick,
            ...rest,
        }}
    >
        {children}
    </Button>
))

ShareButton.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default ShareButton
