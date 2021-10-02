import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import './style'

const StyledTabbedBackLink = ({
    className,
    ...rest
}) => (
    <Button
        {...{
            className: cx(
                'StyledTabbedBackLink',
                className,
            ),
            ...rest,
        }}
    />
)

StyledTabbedBackLink.propTypes = {
    className: PropTypes.string,
}

export default StyledTabbedBackLink
