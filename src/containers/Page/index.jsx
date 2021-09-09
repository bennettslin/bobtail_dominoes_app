import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Helmet from '../../components/Helmet'
import PageFooter from './Footer'
import Body from './Body'
import './style'

const Page = ({
    isWide,
    nextPage,
    previousPage,
    rootPage,
    children,
    ...rest
}) => (
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
        <Body {...rest} />
        <PageFooter
            {...{
                nextPage,
                previousPage,
                rootPage,
            }}
        />
        {children}
    </div>
)

Page.propTypes = {
    isWide: PropTypes.bool,
    nextPage: PropTypes.object,
    previousPage: PropTypes.object,
    rootPage: PropTypes.string,
    children: PropTypes.node,
}

export default Page
