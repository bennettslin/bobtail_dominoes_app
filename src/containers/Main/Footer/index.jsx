import React from 'react'
import cx from 'classnames'
import MailingList from '../../../components/MailingList'
import FollowButtons from '../../../components/FollowButtons'
import StyledFrame from '../StyledFrame'
import './style'

const MainFooter = () => (
    <StyledFrame>
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
    </StyledFrame>
)

export default MainFooter
