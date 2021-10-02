import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../../Flex'
import './style'

const StyledFrameBody = ({
    className,
    children,
    ...rest
}) => (
    <Flex
        {...{
            className: cx(
                'StyledFrameBody',
                className,
            ),
            ...rest,
        }}
    >
        {children}
    </Flex>
)

StyledFrameBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default StyledFrameBody
