import React from 'react'
import cx from 'classnames'
import MailingListInputs from './Inputs'
import { replaceStraightWithSmartQuotes } from '../../utils/format/smartQuote'
import { EMAIL_ACTION } from '../../constants/website'
import './style'

const MailingList = () => (
    <form
        noValidate
        {...{
            className: cx(
                'MailingList',
            ),
            action: EMAIL_ACTION,
            method: 'post',
            target: '_blank',
        }}
    >
        <label {...{ className: cx('MailingList__label') }}>
            Join the Bobtail Yearlings mailing list:
        </label>
        <MailingListInputs />
        <div {...{ className: cx('font__finePrint') }}>
            {replaceStraightWithSmartQuotes(
                `We'll send out an email per month at most.`,
            )}
        </div>
    </form>
)

export default MailingList
