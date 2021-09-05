import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FacebookButton from './VisitButton/FacebookButton'
import TwitterButton from './VisitButton/TwitterButton'
import './style'

const VisitButtons = ({
    className,
}) => {
    const [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setTimeout(() => setDidMount(true), 0)
    }, [])

    return (
        <div
            {...{
                className: cx(
                    'VisitButtons',
                    didMount && 'VisitButtons__shown',
                    className,
                ),
            }}
        >
            <label>Follow the Bobtail Yearlings:</label>
            <div {...{ className: 'VisitButtons__buttons' }}>
                <FacebookButton />
                <TwitterButton />
            </div>
        </div>
    )
}

VisitButtons.propTypes = {
    className: PropTypes.string,
}

export default VisitButtons
