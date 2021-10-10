import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import FacebookButton from './FollowButton/FacebookButton'
import TwitterButton from './FollowButton/TwitterButton'
import { margin__xs } from '../../constants/responsive'

const FollowButtons = () => (
    <Flex
        {...{
            className: cx(
                'FollowButtons',
            ),
            flexDirection: 'column',
            alignItems: 'normal',
            gap: margin__xs,
        }}
    >
        <label>Follow the Bobtail Yearlings:</label>
        <Flex
            {...{
                className: cx(
                    'FollowButtons__buttons',
                ),
                gap: margin__xs * 0.5,
            }}
        >
            <FacebookButton />
            <TwitterButton />
        </Flex>
    </Flex>
)

export default FollowButtons
