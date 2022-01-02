import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AppLoadedContext from '../../contexts/AppLoaded'
import Flex from '../../components/Flex'
import StyledBackground from '../../components/Styled/Background'
import Wrapper from '../Wrapper'
import DemoTracker from './DemoTracker'
import AppFooter from './Footer'
import './style'

const App = ({ children }) => {
    const [didAppLoad, setDidAppLoad] = useState(false)

    useEffect(() => {
        setDidAppLoad(true)
    }, [])

    return (
        <AppLoadedContext.Provider {...{ value: { didAppLoad } }}>
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
                <DemoTracker />
                <StyledBackground />
                <Wrapper>{children}</Wrapper>
                <AppFooter />
            </Flex>
        </AppLoadedContext.Provider>
    )
}

App.propTypes = {
    children: PropTypes.node.isRequired,
}

export default App
