import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ContactEmail from '../../../components/ContactEmail'
import Markdown from '../../../components/Markdown'
import Heading from '../../../components/Heading'
import { replaceStraightWithSmartQuotes } from '../../../utils/format/smartQuote'
import { getHeaderFromDate } from '../../../utils/format/dates'
import './style'

const Body = ({
    body,
    date,
    title,
    showContactEmail,
}) => {
    return (
        <div
            {...{
                className: cx(
                    'Body',
                ),
            }}
        >
            {title && (
                <Heading alignCentre>
                    {replaceStraightWithSmartQuotes(title)}
                </Heading>
            )}
            {date && (
                <Heading {...{ level: 5 }}>
                    {getHeaderFromDate(date)}
                </Heading>
            )}
            {body && (
                (Array.isArray(body) ? body : [body])
                    .map((child, index) => (
                        typeof child === 'string' ? (
                            <Markdown {...{ key: index }}>
                                {child}
                            </Markdown>
                        ) : <Fragment {...{ key: index }}>{child}</Fragment>
                    ))
            )}
            {showContactEmail && (
                <ContactEmail />
            )}
        </div>
    )
}

Body.propTypes = {
    date: PropTypes.shape({
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
    }),
    title: PropTypes.string,
    showContactEmail: PropTypes.bool,
    body: PropTypes.node,
}

export default Body
