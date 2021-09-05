import React from 'react'
import cx from 'classnames'
import { FacebookProvider, Like } from 'react-facebook'

const FacebookButton = () => (
    <FacebookProvider
        {...{
            appId: '1569818066640189',
            version: 'v11.0',
        }}
    >
        <Like
            {...{
                className: cx(
                    'FacebookButton',
                    'fb-like',
                ),
                href: 'https://www.facebook.com/BobtailYearlings',
                layout: 'button',
                size: 'large',
            }}
        />
    </FacebookProvider>
)

export default FacebookButton
