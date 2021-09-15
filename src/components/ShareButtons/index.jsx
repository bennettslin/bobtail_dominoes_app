import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import FacebookButton from './ShareButton/FacebookButton'
import TwitterButton from './ShareButton/TwitterButton'
import CopyUrlButton from './ShareButton/CopyUrlButton'
import './style'

const ShareButtons = () => (
    <Flex
        {...{
            className: cx(
                'ShareButtons',
            ),
        }}
    >
        <label {...{ className: 'ShareButtons__label' }}>
            Share this page:
        </label>
        <FacebookButton />
        <TwitterButton />
        <CopyUrlButton />
    </Flex>
)

export default ShareButtons
