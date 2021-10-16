import React from 'react'
import PropTypes from 'prop-types'
import PageConfigContext from '../../contexts/PageConfig'
import Helmet from '../../components/Helmet'
import ChildrenPage from './ChildrenPage'
import ContentPage from './ContentPage'

const Page = ({ className, children, ...rest }) => (
    <PageConfigContext.Provider {...{ value: rest }}>
        <Helmet />
        {children ? (
            <ChildrenPage {...{ className }}>
                {children}
            </ChildrenPage>
        ) : (
            <ContentPage {...{ className }} />
        )}
    </PageConfigContext.Provider>
)

Page.propTypes = {
    className: PropTypes.string,
    noShare: PropTypes.bool,
    showContactEmail: PropTypes.bool,
    children: PropTypes.node,
    pages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
    })),
    topLevelPage: PropTypes.string,
    pageHeading: PropTypes.string,
    date: PropTypes.shape({
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
    }),
    pathDate: PropTypes.shape({
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
    }),
    body: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.node,
        PropTypes.string,
    ]),
}

export default Page
