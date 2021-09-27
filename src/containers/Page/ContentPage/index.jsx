import React from 'react'
import cx from 'classnames'
import StyledPage from '../../../components/Styled/Page'
import TabbedMenu from './TabbedMenu'
import Body from './Body'
import PageFooter from './Footer'
import './style'

const ContentPage = () => (
    <StyledPage
        {...{
            className: cx(
                'ContentPage',
            ),
            flexDirection: 'column',
            justifyContent: 'normal',
        }}
    >
        <TabbedMenu />
        <Body />
        <PageFooter />
    </StyledPage>
)

export default ContentPage
