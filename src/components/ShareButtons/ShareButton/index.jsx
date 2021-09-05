import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import './style'

const ShareButton = forwardRef(({
    className,
    id,
    children,
    ...rest

}, ref) => (
    <Button
        {...{
            ref,
            className: cx(
                'ShareButton',
                className,
            ),
            analyticsLabel: `ShareButton__${id}`,
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
