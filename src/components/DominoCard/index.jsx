import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../Flex'
import './style'

const DominoCard = ({
    className,
    hasCardStyling = true,
    label,
    children,
    ...rest
}) => (
    <Flex
        {...{
            className: cx(
                'DominoCard',
                hasCardStyling && 'DominoCard__styled',
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
                    hasCardStyling && 'DominoCard__styledInset',
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
    hasCardStyling: PropTypes.bool,
    label: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
}

export default DominoCard
