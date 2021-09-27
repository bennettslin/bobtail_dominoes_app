import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const StyledTabbedMenu = ({
    className,
    children,
}) => (
    <Flex
        {...{
            className: cx(
                'StyledTabbedMenu',
                className,
            ),
            justifyContent: 'start',
        }}
    >
        {children}
    </Flex>
)
StyledTabbedMenu.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default StyledTabbedMenu
