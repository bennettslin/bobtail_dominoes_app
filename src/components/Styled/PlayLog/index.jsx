import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import StyledShadow from '../Shadow'
import './style'

const StyledTurnLog = ({
    isLatestTurn,
    isGameOver,
    children,
}) => {
    return (
        <Flex
            {...{
                className: cx(
                    'StyledLog',
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
    isLatestTurn: PropTypes.bool.isRequired,
    isGameOver: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default StyledTurnLog
