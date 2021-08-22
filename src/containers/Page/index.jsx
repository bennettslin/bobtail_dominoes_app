import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Helmet from '../../components/Helmet'
import './style'

const Page = ({
    title,
    children,
}) => (
    <div
        {...{
            className: cx(
                'Page',
            ),
        }}
    >
        <Helmet {...{ title }} />
        {children}
    </div>
)

Page.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Page
