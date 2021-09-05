import React from 'react'
import { EMAIL_DUMMY_NAME } from '../../../../constants/website'

// Honeypot field to prevent bot signups.
const MailingListHoneypot = () => (
    <div
        {...{
            style: {
                position: 'absolute',
                left: '-5000px',
            },
            'aria-hidden': true,
        }}
    >
        <input
            {...{
                name: EMAIL_DUMMY_NAME,
                type: 'text',
                defaultValue: '',
                tabIndex: -1,
            }}
        />
    </div>
)

export default MailingListHoneypot
