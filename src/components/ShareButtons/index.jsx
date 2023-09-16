import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import CopyUrlButton from './ShareButton/CopyUrlButton'
import './style'

const ShareButtons = () => (
    <Flex
        {...{
            className: cx(
                'ShareButtons',
            ),
            gap: 'xs',
        }}
    >
        <label {...{ className: 'ShareButtons__label' }}>
            Share this page:
        </label>
        <CopyUrlButton />
    </Flex>
)

export default ShareButtons
