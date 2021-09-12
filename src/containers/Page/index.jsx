import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Helmet from '../../components/Helmet'
import PageMenu from './Menu'
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
    noShare,
    pages,
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
        <PageMenu {...{ pages, rootPage }} />
        <Body {...rest} />
        <PageFooter
            {...{
                noShare,
                pages,
                rootPage,
            }}
        />
        {children}
    </div>
)

Page.propTypes = {
    isWide: PropTypes.bool,
    noShare: PropTypes.bool,
    pages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })),
    rootPage: PropTypes.string,
    children: PropTypes.node,
}

export default Page
