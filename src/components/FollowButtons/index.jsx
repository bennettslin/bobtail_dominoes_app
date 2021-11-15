import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import FacebookButton from './FollowButton/FacebookButton'
import TwitterButton from './FollowButton/TwitterButton'

const FollowButtons = () => (
    <Flex
        {...{
            className: cx(
                'FollowButtons',
            ),
            flexDirection: 'column',
            alignItems: 'normal',
            gap: 'xs',
        }}
    >
        <label>Follow the Bobtail Yearlings:</label>
        <Flex
            {...{
                className: cx(
                    'FollowButtons__buttons',
                ),
                gap: 'xs',
            }}
        >
            <FacebookButton />
            <TwitterButton />
        </Flex>
    </Flex>
)

export default FollowButtons
