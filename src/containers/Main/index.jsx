import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../components/Flex'
import Audio from '../Audio'
import MainHeader from './Header'
import MainFooter from './Footer'
import { mapIsFullPage } from '../../redux/page/selector'
import './style'

const Main = ({ children }) => {
    const isFullPage = useSelector(mapIsFullPage)

    return (
        <Flex
            {...{
                className: cx(
                    'Main',
                    isFullPage ?
                        'Main__fullPage' :
                        'Main__defaultPage',
                ),
                flexDirection: 'column',
                gap: { xs: 'xs' },
            }}
        >
            <Audio />
            {!isFullPage && (
                <MainHeader />
            )}
            {children}
            {!isFullPage && (
                <MainFooter />
            )}
        </Flex>
    )
}

Main.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Main
