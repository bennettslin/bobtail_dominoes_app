import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const ButtonAnimatable = ({
    isSelected,
    dropShadow,
    children,
}) => (
    <Flex
        {...{
            className: cx(
                'ButtonAnimatable',
                !isSelected && 'ButtonAnimatable__enabled',
                dropShadow && 'ButtonAnimatable__dropShadow',
            ),
        }}
    >
        {children}
    </Flex>
)

ButtonAnimatable.propTypes = {
    isSelected: PropTypes.bool,
    dropShadow: PropTypes.bool,
    children: PropTypes.any,
}

export default ButtonAnimatable
