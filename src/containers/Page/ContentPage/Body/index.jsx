import React, { Fragment, useContext } from 'react'
import cx from 'classnames'
import PageConfigContext from '../../../../contexts/PageConfig'
import ContactEmail from '../../../../components/ContactEmail'
import Flex from '../../../../components/Flex'
import Heading from '../../../../components/Heading'
import Markdown from '../../../../components/Markdown'
import { getSmartQuotedText } from '../../../../utils/format/smartQuote'
import { formatDate } from '../../../../utils/date/format'
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
                ),
                flexGrow: 1,
                flexDirection: 'column',
                justifyContent: 'normal',
                alignItems: 'normal',
                gap: 'md',
            }}
        >
            <Heading {...{ fontSize: 'md' }}>
                {getSmartQuotedText(pageHeading)}
            </Heading>
            <Heading {...{ level: 3, fontSize: 'md' }}>
                {getSmartQuotedText(titleHeading)}
            </Heading>
            <Heading {...{ level: 5, fontSize: 'md' }}>
                {formatDate({ date: pageDate || date })}
            </Heading>
            {body && (
                (Array.isArray(body) ? body : [body])
                    .map((child, index) => (
                        typeof child === 'string' ? (
                            <Markdown {...{ key: index, fontSize: 'md' }}>
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
