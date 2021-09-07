import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Body from '../Body'
import ContactEmail from '../../../components/ContactEmail'
import Markdown from '../../../components/Markdown'

const MarkdownBody = ({
    body,
    title,
    showContactEmail,
}) => {
    return (
        <Body {...{ title }}>
            {(Array.isArray(body) ? body : [body])
                .map((child, index) => (
                    typeof child === 'string' ? (
                        <Markdown {...{ key: index }}>
                            {child}
                        </Markdown>
                    ) : <Fragment {...{ key: index }}>{child}</Fragment>
                ))}
            {showContactEmail && (
                <ContactEmail />
            )}
        </Body>
    )
}

MarkdownBody.propTypes = {
    title: PropTypes.string,
    showContactEmail: PropTypes.bool,
    body: PropTypes.node.isRequired,
}

export default MarkdownBody
