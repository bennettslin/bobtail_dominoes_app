import React from 'react'
import cx from 'classnames'
import Button from '../../Button'
import { MAILING_LIST_WEBSITE } from '../../../constants/website'

const MailingListAnchor = () => (
    <Button
        dropShadow
        {...{
            className: cx(
                'MailingListAnchor',
                'font__heading',
                'fontSize__lg',
                'colour__link',
            ),
            analyticsLabel: 'BobtailDominoesSubstack',
            href: MAILING_LIST_WEBSITE,
        }}
    >
                Subscribe…
    </Button>
)

export default MailingListAnchor
