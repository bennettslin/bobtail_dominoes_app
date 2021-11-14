import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'

const DominoCard = ({
    className,
    label,
    children,
    ...rest
}) => (
    <Flex
        {...{
            className: cx(
                'DominoCard',
                className,
            ),
            flexDirection: 'column',
            justifyContent: 'spaceEvenly',
            alignItems: 'normal',
            gap: 'xs',
            ...rest,
        }}
    >
        {label}
        <Flex
            {...{
                className: cx(
                    'DominoCard__inset',
                ),
                gap: 'xs',
            }}
        >
            {children}
        </Flex>
    </Flex>
)

DominoCard.propTypes = {
    className: PropTypes.string,
    label: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
}

export default DominoCard
