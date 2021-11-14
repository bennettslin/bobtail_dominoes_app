import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../components/Flex'
import StyledShadow from '../../../components/Styled/Shadow'
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
            <Flex>
                <StyledShadow>
                    {`© ${new Date().getFullYear()} Dogies Almondine`}
                </StyledShadow>
            </Flex>
        </Flex>
    )
}

export default AppFooter
