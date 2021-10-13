import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const StyledPlatform = ({
    className,
    isLeftPlatform,
    isRightPlatform,
    isBottomPlatform,
    children,
    ...rest
}) => (
    <Flex
        {...{
            className: cx(
                'StyledPlatform',
                isLeftPlatform && 'StyledPlatform__left',
                isRightPlatform && 'StyledPlatform__right',
                (isLeftPlatform || isRightPlatform) && 'StyledPlatform__side',
                isBottomPlatform && 'StyledPlatform__bottom',
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
    isBottomPlatform: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default StyledPlatform
