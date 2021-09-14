import React from 'react'
import cx from 'classnames'
import BackgroundPage from './Page'
import './style'

const Background = () => (
    <div
        {...{
            className: cx(
                'Background',
            ),
        }}
    >
        <BackgroundPage />
    </div>
)

export default Background
