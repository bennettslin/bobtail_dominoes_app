import React from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../hocs/DidMountHoc'
import Page from '../../containers/Page'

const Component = ({ didMount }) => (
    <Page
        /**
         * Server side has links for all dates, client side only has links for
         * past and present dates. So prevent server side from rendering links.
         */
        {...didMount && {
            body: 'hi',
        }}
    />
)

Component.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(Component)
