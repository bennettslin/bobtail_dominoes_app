import React from 'react'
import cx from 'classnames'
import FacebookButton from './FollowButton/FacebookButton'
import TwitterButton from './FollowButton/TwitterButton'
import './style'

const FollowButtons = () => (
    <div
        {...{
            className: cx(
                'FollowButtons',
            ),
        }}
    >
        <label {...{ className: 'FollowButtons__label' }}>
            Follow us:
        </label>
        <FacebookButton />
        <TwitterButton />
    </div>
)

export default FollowButtons
