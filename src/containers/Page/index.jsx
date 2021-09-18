import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PageConfigContext from '../../contexts/PageConfig'
import Helmet from '../../components/Helmet'
import TabbedMenu from './TabbedMenu'
import Body from './Body'
import PageFooter from './Footer'
import './style'

const Page = ({
    children,
    ...rest
}) => (
    <PageConfigContext.Provider {...{ value: rest }}>
        <div
            {...{
                className: cx(
                    'Page',
                ),
            }}
        >
            <Helmet />
            {/* This assumes children or markdown, but never both. */}
            {(children ? children : (
                <>
                    <TabbedMenu />
                    <Body />
                    <PageFooter />
                </>
            ))}
        </div>
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
