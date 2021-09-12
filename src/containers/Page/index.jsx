import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PageConfigContext from '../../contexts/PageConfig'
import Helmet from '../../components/Helmet'
import TabbedMenu from './TabbedMenu'
import Body from './Body'
import PageFooter from './Footer'
import './style'

export const getPageElementForConfig = ({ children, ...config }) => () => (
    <Page {...config}>
        {children}
    </Page>
)

const Page = ({
    isWide,
    children,
    ...rest
}) => (
    <PageConfigContext.Provider {...{ value: rest }}>
        <div
            {...{
                className: cx(
                    'Page',
                    isWide ?
                        'Page__wide' :
                        'Page__narrow',
                ),
            }}
        >
            <Helmet />
            <TabbedMenu />
            <Body />
            <PageFooter />
            {children}
        </div>
    </PageConfigContext.Provider>
)

Page.propTypes = {
    isWide: PropTypes.bool,
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
