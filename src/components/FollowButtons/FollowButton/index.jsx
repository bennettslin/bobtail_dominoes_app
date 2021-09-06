import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import './style'

const FollowButton = ({
    className,
    id,
    handleButtonClick,
    children,

}) => (
    <Button
        {...{
            className: cx(
                'FollowButton',
                className,
            ),
            analyticsLabel: `FollowButton__${id}`,
            handleButtonClick,
        }}
    >
        {children}
    </Button>
)

FollowButton.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default FollowButton
