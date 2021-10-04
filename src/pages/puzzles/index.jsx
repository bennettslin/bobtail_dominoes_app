import React from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../hocs/DidMountHoc'
import Page from '../../containers/Page'
import { getMarkdownLinksForRootPage } from '../../utils/format/markdown'
import LINKS_MAPS from '../../content/puzzles'
import { PUZZLES_PAGE } from '../../constants/pages'

const Component = ({ didMount }) => (
    <Page
        /**
         * Server side has links for all dates, client side only has links for
         * past and present dates. So prevent server side from rendering links.
         */
        {...didMount && {
            body: getMarkdownLinksForRootPage({
                topLevelPage: PUZZLES_PAGE,
                pagesList: LINKS_MAPS,
            }),
        }}
    />
)

Component.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(Component)
