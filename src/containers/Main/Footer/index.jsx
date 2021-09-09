import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import MailingList from '../../../components/MailingList'
import FollowButtons from '../../../components/FollowButtons'
import { mapIsUpsellShown } from '../../../redux/option/selector'
import './style'

const MainFooter = () => {
    const
        isUpsellShown = useSelector(mapIsUpsellShown),
        [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setTimeout(() => setDidMount(true), 0)
    }, [])

    return (
        <div
            {...{
                className: cx(
                    'MainFooter',
                    didMount && !isUpsellShown && 'MainFooter__visible',
                ),
            }}
        >
            <MailingList />
            <FollowButtons />
        </div>
    )
}

export default MainFooter
