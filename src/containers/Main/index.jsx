import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../components/Flex'
import MainHeader from './Header'
import MainFooter from './Footer'
import './style'

const Main = ({ children }) => (
    <Flex
        {...{
            className: cx(
                'Main',
            ),
            flexDirection: 'column',
        }}
    >
        <MainHeader />
        {children}
        <MainFooter />
    </Flex>
)

Main.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Main
