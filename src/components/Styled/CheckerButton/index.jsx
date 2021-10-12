import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const StyledCheckerButton = ({
    className,
    children,
    ...rest
}) => (
    <Flex
        {...{
            className: cx(
                'StyledCheckerButton',
                className,
            ),
            ...rest,
        }}
    >
        {children}
    </Flex>
)

StyledCheckerButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default StyledCheckerButton
