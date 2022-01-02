import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../Flex'
import PuzzleLink from './PuzzleLink'
import { filterTimeEligiblePages } from '../../utils/date/current'
import { puzzlePagePropTypes } from '../../constants/propTypes'
import { formatDate } from '../../utils/date/format'

const PuzzleLinks = ({ puzzlesList }) => (
    <Flex
        {...{
            className: cx(
                'PuzzleLinks',
                'fontSize__md',
            ),
            flexDirection: 'column',
            alignItems: 'start',
            gap: 'md',
        }}
    >
        <Flex
            {...{
                justifyContent: 'normal',
                flexWrap: 'wrap',
                gap: 'xs',
            }}
        >
            {filterTimeEligiblePages(puzzlesList).map(puzzle => (
                <PuzzleLink
                    {...{
                        key: formatDate({ date: puzzle.date }),
                        ...puzzle,
                    }}
                />
            ))}
        </Flex>
    </Flex>
)

PuzzleLinks.propTypes = {
    puzzlesList: PropTypes.arrayOf(puzzlePagePropTypes).isRequired,
}

export default PuzzleLinks
