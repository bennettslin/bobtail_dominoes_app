import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../components/Flex'
import { mapIsFullPage } from '../../../redux/page/selector'
import './style'

const AppFooter = () => {
    const isFullPage = useSelector(mapIsFullPage)
    return (
        <Flex
            {...{
                className: cx(
                    'AppFooter',
                    !isFullPage && 'AppFooter__defaultPage',
                    'text__light',
                ),
            }}
        >
            {`© ${new Date().getFullYear()} Dogies Almondine`}
        </Flex>
    )
}

export default AppFooter
