import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { boardPropTypes } from '../../Board'
import { datePropTypes } from '../../../containers/Page'
import Button from '../../Button'
import Flex from '../../Flex'
import StyledShadow from '../../Styled/Shadow'
import PuzzleBoard from '../../Puzzle/Board'
import { getPagePathFromConfig } from '../../../utils/pages/path'
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
            <PuzzleBoard
                {...{
                    className: cx(
                        'PuzzleLinkBoard',
                    ),
                    board,
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
    date: datePropTypes,
    puzzleType: PropTypes.string.isRequired,
    board: boardPropTypes,
}

export default PuzzleLink
