import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import './style'

const ChildrenPage = ({ children }) => (
    <Flex
        {...{
            className: cx(
                'ChildrenPage',
            ),
            flexDirection: 'column',
        }}
    >
        {children}
    </Flex>
)

ChildrenPage.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ChildrenPage
