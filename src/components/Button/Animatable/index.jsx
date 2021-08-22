import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const ButtonAnimatable = ({
    isSelected,
    children,
}) => (
    <div
        {...{
            className: cx(
                'ButtonAnimatable',
                !isSelected && 'ButtonAnimatable__enabled',
            ),
        }}
    >
        {children}
    </div>
)

ButtonAnimatable.propTypes = {
    isSelected: PropTypes.bool,
    children: PropTypes.any,
}

export default ButtonAnimatable
