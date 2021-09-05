import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Helmet from '../../components/Helmet'
import { convertMarkdownToText } from '../../utils/format/markdown'
import './style'

const Page = ({
    isWide,
    content,
    title,
    children,
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
        <Helmet
            {...{
                description: convertMarkdownToText(content),
                title,
            }}
        />
        {children}
    </div>
)

Page.propTypes = {
    isWide: PropTypes.bool,
    content: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Page
