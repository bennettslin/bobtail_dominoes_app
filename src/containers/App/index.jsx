import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../components/Flex'
import StyledBackground from '../../components/Styled/Background'
import Wrapper from '../Wrapper'
import AppFooter from './Footer'
import './style'

const App = ({ children }) => (
    <Flex
        {...{
            className: cx(
                'App',
                'font__text',
            ),
            flexDirection: 'column',
            justifyContent: 'normal',
            alignItems: 'normal',
        }}
    >
        <StyledBackground />
        <Wrapper>{children}</Wrapper>
        <AppFooter />
    </Flex>
)

App.propTypes = {
    children: PropTypes.node.isRequired,
}

export default App
