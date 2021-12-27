import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import StyledShadow from '../Shadow'
import './style'

const StyledLog = ({
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

StyledLog.propTypes = {
    isLatestTurn: PropTypes.bool,
    isGameOver: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default StyledLog
