import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ArcadeButton from '../../../ArcadeButton'
import './style'

const DemoButton = ({
    className,
    ...rest

}) => (
    <ArcadeButton
        {...{
            className: cx(
                'DemoButton',
                className,
            ),
            ...rest,
        }}
    />
)

DemoButton.propTypes = {
    className: PropTypes.string,
}

export default DemoButton
