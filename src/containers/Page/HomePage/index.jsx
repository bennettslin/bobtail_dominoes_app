import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../../components/Flex'
import './style'

const HomePage = ({ className, children }) => (
    <Flex
        {...{
            className: cx(
                'HomePage',
                className,
            ),
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}
    >
        {children}
    </Flex>
)

HomePage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default HomePage
