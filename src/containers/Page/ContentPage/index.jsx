import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import StyledPage from '../../../components/Styled/Page'
import TabbedMenu from './TabbedMenu'
import Body from './Body'
import PageFooter from './Footer'
import './style'

const ContentPage = ({ className }) => (
    <StyledPage
        {...{
            className: cx(
                'ContentPage',
                className,
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

ContentPage.propTypes = {
    className: PropTypes.string,
}

export default ContentPage
