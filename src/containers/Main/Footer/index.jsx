import React from 'react'
import cx from 'classnames'
import MailingList from '../../../components/MailingList'
import FollowButtons from '../../../components/FollowButtons'
import StyledFrame from '../../../components/Styled/Frame'
import './style'

const MainFooter = () => (
    <StyledFrame
        {...{
            className: cx(
                'MainFooter',
            ),
        }}
    >
        <MailingList />
        <FollowButtons />
    </StyledFrame>
)

export default MainFooter
