import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import './style'

const StyledPage = ({ className, children }) => (
    <Flex
        {...{
            className: cx(
                'StyledPage',
                className,
            ),
        }}
    >
        {children}
    </Flex>
)

StyledPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default StyledPage
