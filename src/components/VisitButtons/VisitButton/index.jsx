import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import './style'

const VisitButton = forwardRef(({
    className,
    id,
    children,
    ...rest

}, ref) => (
    <Button
        {...{
            ref,
            className: cx(
                'VisitButton',
                className,
            ),
            analyticsLabel: `VisitButton__${id}`,
            ...rest,
        }}
    >
        {children}
    </Button>
))

VisitButton.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default VisitButton
