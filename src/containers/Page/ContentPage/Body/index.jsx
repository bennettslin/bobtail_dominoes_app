import React, { Fragment, useContext } from 'react'
import cx from 'classnames'
import PageConfigContext from '../../../../contexts/PageConfig'
import ContactEmail from '../../../../components/ContactEmail'
import Flex from '../../../../components/Flex'
import Markdown from '../../../../components/Markdown'
import Heading from '../../../../components/Heading'
import { getSmartQuotedText } from '../../../../utils/format/smartQuote'
import { getHeaderFromDate } from '../../../../utils/date'
import './style'

const Body = () => {
    const {
        pageHeading,
        titleHeading,
        date,
        pageDate,
        body,
        showContactEmail,
    } = useContext(PageConfigContext)

    return (
        <Flex
            {...{
                className: cx(
                    'Body',
                    'fontSize__md',
                ),
                flexDirection: 'column',
                justifyContent: 'normal',
                alignItems: 'normal',
            }}
        >
            <Heading>
                {getSmartQuotedText(pageHeading)}
            </Heading>
            <Heading {...{ level: 3 }}>
                {getSmartQuotedText(titleHeading)}
            </Heading>
            <Heading {...{ level: 5 }}>
                {getHeaderFromDate(pageDate || date)}
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
        </Flex>
    )
}

export default Body
