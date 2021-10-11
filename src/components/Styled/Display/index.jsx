import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const StyledDisplay = ({ className, children, ...rest }) => (
    <Flex
        {...{
            className: cx(
                'StyledDisplay',
                className,
            ),
            ...rest,
        }}
    >
        {children}
    </Flex>
)

StyledDisplay.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default StyledDisplay
