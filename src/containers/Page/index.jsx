import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PageConfigContext from '../../contexts/PageConfig'
import StyledPage from '../../components/Styled/Page'
import TabbedMenu from './TabbedMenu'
import Body from './Body'
import PageFooter from './Footer'
import Helmet from '../../components/Helmet'
import './style'

const Page = ({ ...rest }) => (
    <PageConfigContext.Provider {...{ value: rest }}>
        <Helmet />
        <StyledPage
            {...{
                className: cx(
                    'Page',
                ),
                flexDirection: 'column',
                justifyContent: 'normal',
            }}
        >
            <TabbedMenu />
            <Body />
            <PageFooter />
        </StyledPage>
    </PageConfigContext.Provider>
)

Page.propTypes = {
    noShare: PropTypes.bool,
    showContactEmail: PropTypes.bool,
    children: PropTypes.node,
    pages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })),
    topLevelPage: PropTypes.string,
    pageHeading: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.shape({
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
    }),
    body: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
}

export default Page
