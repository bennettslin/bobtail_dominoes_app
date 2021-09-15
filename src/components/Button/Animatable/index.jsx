import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const ButtonAnimatable = ({
    isSelected,
    children,
}) => (
    <Flex
        {...{
            className: cx(
                'ButtonAnimatable',
                !isSelected && 'ButtonAnimatable__enabled',
            ),
        }}
    >
        {children}
    </Flex>
)

ButtonAnimatable.propTypes = {
    isSelected: PropTypes.bool,
    children: PropTypes.any,
}

export default ButtonAnimatable
