import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import PageConfigContext from '../../contexts/PageConfig'
import Helmet from '../../components/Helmet'
import ChildrenPage from './ChildrenPage'
import ContentPage from './ContentPage'
import { updateSelectedPagePath } from '../../redux/page/action'
import { getPathFromLink } from '../../utils/pages/path'
import { datePropTypes, pagePropTypes, pagesPropTypes } from '../../constants/propTypes'

const Page = ({ className, children, ...rest }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            updateSelectedPagePath(
                getPathFromLink(window.location.pathname),
            ),
        )
    }, [])

    console.log('page rest', rest)

    return (
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
}

Page.propTypes = {
    className: PropTypes.string,
    noShare: PropTypes.bool,
    showContactEmail: PropTypes.bool,
    children: PropTypes.node,
    topLevelPage: PropTypes.string,
    pageHeading: PropTypes.string,
    date: datePropTypes,
    body: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.node,
        PropTypes.string,
    ]),
    directionLeftPage: pagePropTypes,
    directionRightPage: pagePropTypes,
    pages: pagesPropTypes,
}

export default Page
