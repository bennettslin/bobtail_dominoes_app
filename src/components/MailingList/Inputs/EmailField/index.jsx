import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import * as EmailValidator from 'email-validator'
import {
    EMAIL_NAME,
    EMAIL_ID,
} from '../../../../constants/website'
import './style'

const MailingListEmailField = ({ setIsValidEmail }) => {
    const [emailValue, setEmailValue] = useState('')

    const onChange = ({ target: { value } }) => {
        const emailValue = value.replace(' ', '')
        setEmailValue(emailValue)
    }

    useEffect(() => {
        setIsValidEmail(EmailValidator.validate(emailValue))
    }, [emailValue])

    return (
        <input
            required
            {...{
                className: cx(
                    'MailingListEmailField',
                    'font__text',
                ),
                id: EMAIL_ID,
                name: EMAIL_NAME,
                type: 'text',
                value: emailValue,
                placeholder: 'Email address',
                autoComplete: 'off',
                maxLength: 254,
                onChange,
            }}
        />
    )
}

MailingListEmailField.propTypes = {
    setIsValidEmail: PropTypes.func.isRequired,
}

export default MailingListEmailField
