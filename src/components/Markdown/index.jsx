import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactMarkdown from 'react-markdown'
import Anchor from '../Anchor'
import Heading from '../Heading'
import List from '../List'
import ListItem from '../List/ListItem'
import Paragraph from '../Paragraph'
import { getFormattedText } from '../../utils/format'
import './style'

const Markdown = ({
    className,
    fontSize = 'sm',
    children,
}) => (
    <ReactMarkdown
        {...{
            className: cx(
                'Markdown',
                fontSize === 'sm' && 'fontSize__sm',
                fontSize === 'md' && 'fontSize__md',
                className,
            ),
            components: {
                a: Anchor,
                h1: ({ children }) => (
                    <Heading>{children}</Heading>
                ),
                h3: ({ children }) => (
                    <Heading {...{ level: 3 }}>{children}</Heading>
                ),
                h5: ({ children }) => (
                    <Heading {...{ level: 5 }}>{children}</Heading>
                ),
                li: ({ children }) => (
                    <ListItem hasGap>{children}</ListItem>
                ),
                p: Paragraph,
                ul: List,
            },
        }}
    >
        {getFormattedText(children)}
    </ReactMarkdown>
)

Markdown.propTypes = {
    className: PropTypes.string,
    fontSize: PropTypes.oneOf(['sm', 'md']),
    children: PropTypes.string.isRequired,
}

export default Markdown
