import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const StyledPlatform = ({
    className,
    isLeftPlatform,
    isRightPlatform,
    children,
    ...rest
}) => (
    <Flex
        {...{
            className: cx(
                'StyledPlatform',
                isLeftPlatform && 'StyledPlatform__left',
                isRightPlatform && 'StyledPlatform__right',
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
    isLeftPlatform: PropTypes.bool,
    isRightPlatform: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default StyledPlatform
