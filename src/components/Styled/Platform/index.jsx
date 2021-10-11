import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const StyledPlatform = ({ className, children, ...rest }) => (
    <Flex
        {...{
            className: cx(
                'StyledPlatform',
                className,
            ),
            flexGrow: 1,
            ...rest,
        }}
    >
        {children}
    </Flex>
)

StyledPlatform.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default StyledPlatform
