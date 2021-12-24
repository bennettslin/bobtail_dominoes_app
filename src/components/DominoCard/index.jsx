import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../Flex'
import StyledShadow from '../Styled/Shadow'
import DominoCardDomino from './Domino'
import './style'

const DominoCard = ({
    className,
    hasCardStyling = true,
    label,
    labelText,
    hand,
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
        {labelText && (
            <Flex
                {...{
                    className: cx(
                        'DominoCard__label',
                        'labelFontSize__md',
                    ),
                }}
            >
                <StyledShadow isInset isGold>
                    {labelText}
                </StyledShadow>
            </Flex>
        )}
        <Flex
            {...{
                className: cx(
                    'DominoCard__inset',
                    hasCardStyling && 'DominoCard__styledInset',
                ),
                gap: 'xs',
            }}
        >
            {hand && Array.from(hand).map(dominoIndex => (
                <DominoCardDomino
                    {...{
                        key: dominoIndex,
                        dominoIndex,
                    }}
                />
            ))}
            {children}
        </Flex>
    </Flex>
)

DominoCard.propTypes = {
    className: PropTypes.string,
    hasCardStyling: PropTypes.bool,
    label: PropTypes.node,
    labelText: PropTypes.string,
    hand: PropTypes.object,
    children: PropTypes.node,
}

export default DominoCard
