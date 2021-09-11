import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
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
        <CSSTransition
            appear
            {...{
                in: didMount && !isUpsellShown,
                timeout: 200,
                classNames: {
                    enterDone: 'MainFooter__visible',
                },
            }}
        >
            <div
                {...{
                    className: cx(
                        'MainFooter',
                    ),
                }}
            >
                <MailingList />
                <FollowButtons />
            </div>
        </CSSTransition>
    )
}

export default MainFooter
