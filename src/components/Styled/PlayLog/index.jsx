import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import StyledShadow from '../Shadow'
import './style'

const StyledTurnLog = ({
    isLatestTurn,
    isGameOver,
    centreText,
    children,
}) => {
    return (
        <Flex
            {...{
                className: cx(
                    'StyledLog',
                    centreText && 'StyledLog__centreText',
                    isLatestTurn && 'StyledLog__latest',
                ),
            }}
        >
            <StyledShadow
                {...{
                    isInset: isLatestTurn,
                    isPlayedHighlight: isLatestTurn && !isGameOver,
                    isGold: isLatestTurn && isGameOver,
                }}
            >
                {children}
            </StyledShadow>
        </Flex>
    )
}

StyledTurnLog.propTypes = {
    isLatestTurn: PropTypes.bool,
    centreText: PropTypes.bool,
    isGameOver: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default StyledTurnLog
