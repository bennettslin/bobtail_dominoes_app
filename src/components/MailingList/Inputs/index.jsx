import React, { useState } from 'react'
import cx from 'classnames'
import Flex from '../../Flex'
import MailingListHoneypot from './Honeypot'
import MailingListEmailField from './EmailField'
import MailingListSubmitButton from './SubmitButton'
import './style'

const MailingListInputs = () => {
    const [isValidEmail, setIsValidEmail] = useState(false)

    return (
        <Flex
            {...{
                className: cx(
                    'MailingListInputs',
                ),
            }}
        >
            <MailingListEmailField {...{ setIsValidEmail }} />
            <MailingListHoneypot />
            <MailingListSubmitButton {...{ isValidEmail }} />
        </Flex>
    )
}

export default MailingListInputs
