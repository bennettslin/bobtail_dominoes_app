import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import './style'

const ChildrenPage = ({ className, children }) => (
    <Flex
        {...{
            className: cx(
                'ChildrenPage',
                className,
            ),
            flexGrow: 1,
            flexDirection: 'column',
        }}
    >
        {children}
    </Flex>
)

ChildrenPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default ChildrenPage
