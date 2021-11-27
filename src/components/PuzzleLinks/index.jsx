import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../hocs/DidMountHoc'
import Flex from '../Flex'
import PuzzleLink from './PuzzleLink'
import puzzles from '../../content/puzzles'
import { filterPastAndPresentDates } from '../../utils/date/puzzles'
import './style'

const PuzzleLinks = ({ didMount }) => (
    didMount && (
        <Flex
            {...{
                className: cx(
                    'PuzzleLinks',
                ),
                gap: 'xs',
            }}
        >
            {filterPastAndPresentDates(puzzles).map((puzzle, index) => (
                <PuzzleLink
                    {...{
                        key: index,
                        ...puzzle,
                    }}
                />
            ))}
        </Flex>
    )
)

PuzzleLinks.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(PuzzleLinks)
