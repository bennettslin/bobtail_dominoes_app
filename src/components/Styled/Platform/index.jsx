import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const StyledPlatform = ({ children }) => (
    <Flex
        {...{
            className: cx(
                'StyledPlatform',
            ),
            flexGrow: 1,
        }}
    >
        {children}
    </Flex>
)

StyledPlatform.propTypes = {
    children: PropTypes.node.isRequired,
}

export default StyledPlatform
