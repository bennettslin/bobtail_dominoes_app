import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import Flex from '../../Flex'
import Hand from '../../Hand'
import StyledShadow from '../../Styled/Shadow'
import PuzzleBoard from '../../Puzzle/Board'
import { getPagePathFromConfig } from '../../../utils/pages/path/config'
import { boardPropTypes, datePropTypes, handListPropTypes } from '../../../constants/propTypes'
import './style'

const PuzzleLink = ({
    topLevelPage,
    date,
    board,
    handList,
    missingMoves,
}) => {
    const hand = new Set(handList)

    return (
        <Button
            dropShadow
            {...{
                pagePath: getPagePathFromConfig({ topLevelPage, date }),
            }}
        >
            <Flex
                {...{
                    className: cx(
                        'PuzzleLink',
                    ),
                    flexDirection: 'column',
                    justifyContent: 'spaceBetween',
                    alignItems: 'normal',
                }}
            >
                <PuzzleBoard
                    isThumbnail
                    {...{
                        className: cx(
                            'PuzzleLinkBoard',
                            hand.size && 'PuzzleLinkBoard__withHand',
                        ),
                        board,
                        missingMoves,
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
                <Hand isThumbnail {...{ hand }} />
            </Flex>
        </Button>
    )
}

PuzzleLink.propTypes = {
    topLevelPage: PropTypes.string.isRequired,
    date: datePropTypes,
    puzzleType: PropTypes.string.isRequired,
    board: boardPropTypes.isRequired,
    handList: handListPropTypes,
    missingMoves: boardPropTypes,
}

export default PuzzleLink
