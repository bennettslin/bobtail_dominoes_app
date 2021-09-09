import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Helmet from '../../components/Helmet'
import PageFooter from './Footer'
import Body from './Body'
import './style'

const Page = ({
    isWide,
    root,
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
        {root && (
            <PageFooter {...{ backPage: root }} />
        )}
        {children}
    </div>
)

Page.propTypes = {
    isWide: PropTypes.bool,
    root: PropTypes.string,
    children: PropTypes.node,
}

export default Page
