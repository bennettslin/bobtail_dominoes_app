import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import FacebookButton from './FacebookButton'
import TwitterButton from './TwitterButton'
import './style'

const FollowButtons = () => {
    const [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setTimeout(() => setDidMount(true), 0)
    }, [])

    return (
        <div
            {...{
                className: cx(
                    'FollowButtons',
                    didMount && 'FollowButtons__shown',
                ),
            }}
        >
            <label {...{ className: 'FollowButtons__label' }}>
                Follow the Bobtail Yearlings:
            </label>
            <FacebookButton />
            <TwitterButton />
        </div>
    )
}

export default FollowButtons
