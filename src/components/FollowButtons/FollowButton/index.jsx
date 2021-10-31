import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import Flex from '../../Flex'
import { getCapitalizedText } from '../../../utils/format'
import './style'

const FollowButton = ({
    className,
    id,
    handleButtonClick,
    children,

}) => (
    <Button
        dropShadow
        {...{
            className: cx(
                'FollowButton',
                className,
            ),
            analyticsLabel: `FollowButton__${id}`,
            handleButtonClick,
        }}
    >
        <Flex
            {...{
                className: cx(
                    'FollowButton__field',
                    `FollowButton__field__${id}`,
                    'font__text',
                    'text__light',
                ),
                gap: 'xs',
            }}
        >
            {children}
            {getCapitalizedText(id)}
        </Flex>
    </Button>
)

FollowButton.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default FollowButton
