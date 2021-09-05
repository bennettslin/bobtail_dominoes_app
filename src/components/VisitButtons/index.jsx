import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FacebookButton from './VisitButton/FacebookButton'
import TwitterButton from './VisitButton/TwitterButton'
import './style'

const VisitButtons = ({
    className,
}) => (
    <div
        {...{
            className: cx(
                'VisitButtons',
                className,
            ),
        }}
    >
        <label>Follow the Bobtail Yearlings:</label>
        <FacebookButton />
        <TwitterButton />
    </div>
)

VisitButtons.propTypes = {
    className: PropTypes.string,
}

export default VisitButtons
