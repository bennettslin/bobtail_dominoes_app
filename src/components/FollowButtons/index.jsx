import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import FacebookButton from './FollowButton/FacebookButton'
import TwitterButton from './FollowButton/TwitterButton'
import './style'

const FollowButtons = () => (
    <Flex
        {...{
            className: cx(
                'FollowButtons',
            ),
            flexDirection: 'column',
            alignItems: 'normal',
        }}
    >
        <label>Follow the Bobtail Yearlings:</label>
        <Flex
            {...{
                className: cx(
                    'FollowButtons__buttons',
                ),
            }}
        >
            <FacebookButton />
            <TwitterButton />
        </Flex>
    </Flex>
)

export default FollowButtons
