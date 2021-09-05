import React, { useState } from 'react'
import cx from 'classnames'
import MailingListHoneypot from './Honeypot'
import MailingListEmailField from './EmailField'
import MailingListSubmitButton from './SubmitButton'
import './style'

const MailingListInputs = () => {
    const [isValidEmail, setIsValidEmail] = useState(false)

    return (
        <div
            {...{
                className: cx(
                    'MailingListInputs',
                ),
            }}
        >
            <MailingListEmailField {...{ setIsValidEmail }} />
            <MailingListHoneypot />
            <MailingListSubmitButton {...{ isValidEmail }} />
        </div>
    )
}

export default MailingListInputs
