import React, { useState } from 'react'
import cx from 'classnames'
import Flex from '../../Flex'
import MailingListHoneypot from './Honeypot'
import MailingListEmailField from './EmailField'
import MailingListSubmitButton from './SubmitButton'

const MailingListInputs = () => {
    const [isValidEmail, setIsValidEmail] = useState(false)

    return (
        <Flex
            {...{
                className: cx(
                    'MailingListInputs',
                ),
                gap: 'xs',
            }}
        >
            <MailingListEmailField {...{ setIsValidEmail }} />
            <MailingListHoneypot />
            <MailingListSubmitButton {...{ isValidEmail }} />
        </Flex>
    )
}

export default MailingListInputs
