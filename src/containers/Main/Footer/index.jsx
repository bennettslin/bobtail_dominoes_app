import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import MailingList from '../../../components/MailingList'
import FollowButtons from '../../../components/FollowButtons'
import { mapIsUpsellShown } from '../../../redux/option/selector'
import './style'

const Footer = () => {
    const isUpsellShown = useSelector(mapIsUpsellShown)

    return (
        <div
            {...{
                className: cx(
                    'Footer',
                    !isUpsellShown && 'Footer__visible',
                ),
            }}
        >
            <MailingList />
            <FollowButtons />
        </div>
    )
}

export default Footer
