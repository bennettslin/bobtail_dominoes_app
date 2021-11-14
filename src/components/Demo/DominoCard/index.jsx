import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import './style'
import StyledShadow from '../../Styled/Shadow'

const DominoCard = ({ className, label, figure, children, ...rest }) => (
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
        <Flex
            {...{
                className: cx(
                    'DominoCard__label',
                ),
                justifyContent: 'spaceBetween',
                gap: 'xs',
            }}
        >
            <Flex
                {...{
                    className: cx(
                        'fontSize__md',
                    ),
                }}
            >
                <StyledShadow isInset isInteractive>
                    {label}
                </StyledShadow>
            </Flex>
            {(figure || Number.isFinite(figure)) && (
                <Flex
                    {...{
                        className: cx(
                            'font__button',
                            'fontSize__lg',
                        ),
                    }}
                >
                    <StyledShadow isInset isInteractive>
                        {figure}
                    </StyledShadow>
                </Flex>
            )}
        </Flex>
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
    figure: PropTypes.node,
    children: PropTypes.node.isRequired,
}

export default DominoCard
