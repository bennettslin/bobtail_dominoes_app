import React from 'react'
import cx from 'classnames'
import MailingList from '../../../components/MailingList'
import FollowButtons from '../../../components/FollowButtons'
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
        <FollowButtons />
    </div>
)

export default Footer
