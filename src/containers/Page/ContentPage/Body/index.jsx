import React, { Fragment, useContext } from 'react'
import cx from 'classnames'
import PageConfigContext from '../../../../contexts/PageConfig'
import ContactEmail from '../../../../components/ContactEmail'
import Markdown from '../../../../components/Markdown'
import Heading from '../../../../components/Heading'
import { getSmartQuotedText } from '../../../../utils/format/smartQuote'
import { getHeaderFromDate } from '../../../../utils/format/dates'
import './style'

const Body = () => {
    const {
        pageHeading,
        titleHeading,
        title,
        date,
        body,
        showContactEmail,
    } = useContext(PageConfigContext)

    return (
        <div
            {...{
                className: cx(
                    'Body',
                    'fontSize__md',
                ),
            }}
        >
            <Heading>
                {getSmartQuotedText(pageHeading)}
            </Heading>
            <Heading {...{ level: 3 }}>
                {getSmartQuotedText(titleHeading || title)}
            </Heading>
            <Heading {...{ level: 5 }}>
                {getHeaderFromDate(date)}
            </Heading>
            {body && (
                (Array.isArray(body) ? body : [body])
                    .map((child, index) => (
                        typeof child === 'string' ? (
                            <Markdown {...{ key: index }}>
                                {child}
                            </Markdown>
                        ) : <Fragment {...{ key: index }}>
                            {child}
                        </Fragment>
                    ))
            )}
            {showContactEmail && (
                <ContactEmail />
            )}
        </div>
    )
}

export default Body
