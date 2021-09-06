import React from 'react'
import cx from 'classnames'
import FacebookButton from './ShareButton/FacebookButton'
import TwitterButton from './ShareButton/TwitterButton'
import CopyUrlButton from './ShareButton/CopyUrlButton'
import './style'

const ShareButtons = () => (
    <div
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
    </div>
)

export default ShareButtons
