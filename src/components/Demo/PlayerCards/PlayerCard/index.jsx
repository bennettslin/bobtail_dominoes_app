import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../Flex'
import StyledShadow from '../../../Styled/Shadow'
import PeopleSvg from '../../../Svgs/People'
import Domino from '../../Domino'
import DominoCard from '../../DominoCard'
import {
    getMapHand,
    getMapIsFocusedPlayer,
    getMapScore,
    mapIsGamePlaying,
} from '../../../../redux/game/selector'
import { getPlayerSrc } from '../../../../utils/src/people'
import { PLAYERS } from '../../../../constants/music/play'
import './style'

const PlayerCard = ({ playerIndex }) => {
    const
        hand = useSelector(getMapHand(playerIndex)),
        score = useSelector(getMapScore(playerIndex)),
        isGamePlaying = useSelector(mapIsGamePlaying),
        isFocusedPlayer = useSelector(getMapIsFocusedPlayer(playerIndex)),
        styledShadowConfig = {
            isInset: isFocusedPlayer,
            isInteractive: isFocusedPlayer && !isGamePlaying,
            isHighlight: isFocusedPlayer && isGamePlaying,
        }

    return (
        <DominoCard
            {...{
                className: cx(
                    'PlayerCard',
                ),
                hasCardStyling: isFocusedPlayer,
                label: (
                    <Flex
                        {...{
                            className: cx(
                                'PlayerCard__label',
                            ),
                            justifyContent: 'spaceBetween',
                            alignItems: 'start',
                            flexGrow: 1,
                        }}
                    >
                        <PeopleSvg
                            {...{
                                className: cx(
                                    'PlayerCard__player',
                                ),
                                src: getPlayerSrc(playerIndex),
                            }}
                        />
                        <Flex
                            {...{
                                flexDirection: 'column',
                                alignItems: 'flexEnd',
                            }}
                        >
                            <Flex
                                {...{
                                    className: cx(
                                        'font__button',
                                        'labelFontSize__lg',
                                    ),
                                }}
                            >
                                <StyledShadow {...styledShadowConfig}>
                                    {score}
                                </StyledShadow>
                            </Flex>
                            <Flex
                                {...{
                                    className: cx(
                                        'labelFontSize__sm',
                                    ),
                                }}
                            >
                                <StyledShadow {...styledShadowConfig}>
                                    {PLAYERS[playerIndex]}
                                </StyledShadow>
                            </Flex>
                        </Flex>
                    </Flex>
                ),
                figure: score,
                flexGrow: 1,
            }}
        >
            {Array.from(hand).map(dominoIndex => (
                <Domino
                    {...{
                        className: cx(
                            'PlayerCard__domino',
                        ),
                        key: dominoIndex,
                        dominoIndex,
                    }}
                />
            ))}
        </DominoCard>
    )
}

PlayerCard.propTypes = {
    playerIndex: PropTypes.number.isRequired,
}

export default PlayerCard
