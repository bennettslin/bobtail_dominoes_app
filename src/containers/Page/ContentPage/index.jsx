import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../contexts/PageConfig'
import StyledPage from '../../../components/Styled/Page'
import Body from './Body'
import PageFooter from './Footer'
import TabbedMenu from './TabbedMenu'
import { getMapShowTabbedMenu } from '../../../redux/page/selector'
import './style'

const ContentPage = ({ className }) => {
    const
        { pages } = useContext(PageConfigContext),
        showTabbedMenu = useSelector(getMapShowTabbedMenu(pages))

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
