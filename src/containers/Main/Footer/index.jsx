import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import MailingList from '../../../components/MailingList'
import FollowButtons from '../../../components/FollowButtons'
import StyledFrame from '../../../components/Styled/Frame'
import { mapIsUpsellShown } from '../../../redux/option/selector'
import './style'

const MainFooter = () => {
    const isUpsellShown = useSelector(mapIsUpsellShown)

    return (
        <StyledFrame
            {...{
                className: cx(
                    'MainFooter',
                ),
                isShown: !isUpsellShown,
            }}
        >
            <MailingList />
            <FollowButtons />
        </StyledFrame>
    )
}

export default MainFooter
