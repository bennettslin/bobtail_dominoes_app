import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import { getCapitalizedText } from '../../../utils/format'
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
        <div
            {...{
                className: cx(
                    'FollowButton__field',
                    `FollowButton__field__${id}`,
                    'font__text',
                ),
            }}
        >
            {children}
            {getCapitalizedText(id)}
        </div>
    </Button>
)

FollowButton.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default FollowButton
