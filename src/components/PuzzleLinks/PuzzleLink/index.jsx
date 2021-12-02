import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import Board from '../../Board'
import Flex from '../../Flex'
import StyledShadow from '../../Styled/Shadow'
import { getPagePathFromConfig } from '../../../utils/pages/config'
import { PUZZLE_BOARD_HEXAGON_WIDTH } from '../../../constants/music/puzzle'
import './style'

const PuzzleLink = ({
    topLevelPage,
    date,
    board,
}) => (
    <Button
        dropShadow
        {...{
            pagePath: getPagePathFromConfig({ topLevelPage, date }),
        }}
    >
        <Flex
            {...{
                className: cx(
                    'PuzzleLink__wrapper',
                ),
                justifyContent: 'normal',
                alignItems: 'normal',
            }}
        >
            <Board
                {...{
                    className: cx(
                        'PuzzleLinkBoard',
                    ),
                    board,
                    boardHexagonalWidth: PUZZLE_BOARD_HEXAGON_WIDTH,
                    boardHexagonalBaseWidth: PUZZLE_BOARD_HEXAGON_WIDTH,
                }}
            />
            <Flex
                {...{
                    className: cx(
                        'PuzzleLink__text',
                        'font__heading',
                    ),
                }}
            >
                <StyledShadow>
                    {date.day}
                </StyledShadow>
            </Flex>
        </Flex>
    </Button>
)

PuzzleLink.propTypes = {
    topLevelPage: PropTypes.string.isRequired,
    date: PropTypes.shape({
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
    }),
    puzzleType: PropTypes.string.isRequired,
    board: PropTypes.arrayOf(PropTypes.shape({
        dominoIndex: PropTypes.number.isRequired,
        placement: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number.isRequired,
            ).isRequired,
        ),
    })).isRequired,
}

export default PuzzleLink
