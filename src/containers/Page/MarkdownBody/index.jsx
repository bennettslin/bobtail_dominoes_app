import React from 'react'
import PropTypes from 'prop-types'
import Body from '../Body'
import ContactEmail from '../../../components/ContactEmail'
import Markdown from '../../../components/Markdown'

const MarkdownBody = ({
    title,
    showContactEmail,
    children,
}) => (
    <Body {...{ title }}>
        <Markdown>
            {children}
        </Markdown>
        {showContactEmail && (
            <ContactEmail />
        )}
    </Body>
)

MarkdownBody.propTypes = {
    title: PropTypes.string,
    showContactEmail: PropTypes.bool,
    children: PropTypes.string.isRequired,
}

export default MarkdownBody
