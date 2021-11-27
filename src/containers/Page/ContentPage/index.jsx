import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import StyledPage from '../../../components/Styled/Page'
import Body from './Body'
import PageFooter from './Footer'
import TabbedMenu from './TabbedMenu'
import { mapShowTabbedMenu } from '../../../redux/page/selector'
import './style'

const ContentPage = ({ className }) => {
    const showTabbedMenu = useSelector(mapShowTabbedMenu)

    return (
        <StyledPage
            {...{
                className: cx(
                    'ContentPage',
                    className,
                ),
                flexGrow: 1,
                flexDirection: 'column',
                justifyContent: 'normal',
                gap: 'md',
                showTabbedMenu,
            }}
        >
            <TabbedMenu />
            <Body />
            <PageFooter />
        </StyledPage>
    )
}

ContentPage.propTypes = {
    className: PropTypes.string,
}

export default ContentPage
