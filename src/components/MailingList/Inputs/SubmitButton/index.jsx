import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const MailingListSubmitButton = ({ isValidEmail }) => {
    const onClick = () => {
        logEvent(
            'MailingList',
            'submit',
        )
    }

    return (
        <input
            {...{
                className: cx(
                    'MailingListSubmitButton',
                    'font__text',
                ),
                type: 'submit',
                value: 'Sign up!',
                disabled: !isValidEmail,
                onClick,
            }}
        />
    )
}

MailingListSubmitButton.propTypes = {
    isValidEmail: PropTypes.bool.isRequired,
}

export default MailingListSubmitButton
