import React from 'react'
import cx from 'classnames'
import Button from '../../Button'

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
            analyticsLabel: 'BobtailSubstack',
            href: 'https://bobtail.substack.com',
        }}
    >
                Join our mailing list
    </Button>
)

export default MailingListAnchor
