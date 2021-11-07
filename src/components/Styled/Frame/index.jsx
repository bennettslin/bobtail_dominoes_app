import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const StyledFrame = ({
    className,
    children,
    ...rest
}) => (
    <Flex
        {...{
            className: cx(
                'StyledFrame',
                className,
            ),
            ...rest,
        }}
    >
        <div {...{ className: 'StyledFrame__inset' }} />
        {children}
    </Flex>
)

StyledFrame.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default StyledFrame
