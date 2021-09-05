import React from 'react'
import cx from 'classnames'

const TwitterButton = () => (
    <a
        {...{
            className: cx(
                'TwitterButton',
                'twitter-follow-button',
            ),
            href: 'https://twitter.com/BobtailYearling',
            'data-size': 'large',
            'data-show-screen-name': false,
            'data-dnt': true,
            'data-show-count': false,
        }}
    />
)

export default TwitterButton
