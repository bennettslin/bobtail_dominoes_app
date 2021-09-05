import React from 'react'
import cx from 'classnames'
import MailingList from '../../../components/MailingList'
import VisitButtons from '../../../components/VisitButtons'
import './style'

const Footer = () => (
    <div
        {...{
            className: cx(
                'Footer',
            ),
        }}
    >
        <MailingList />
        <VisitButtons />
    </div>
)

export default Footer
