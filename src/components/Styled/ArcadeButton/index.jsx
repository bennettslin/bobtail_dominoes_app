import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const StyledArcadeButton = ({
    className,
    children,
    ...rest
}) => (
    <Flex
        {...{
            className: cx(
                'StyledArcadeButton',
                className,
            ),
            ...rest,
        }}
    >
        {children}
    </Flex>
)

StyledArcadeButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default StyledArcadeButton
