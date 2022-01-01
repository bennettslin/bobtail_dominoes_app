import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import Heading from '../Heading'
import PuzzleLink from './PuzzleLink'
import puzzles from '../../content/puzzles'
import { formatDate } from '../../utils/date/format'
import { getListFromMap } from '../../utils/pages/dateStructure'
import { datePropTypes } from '../../constants/propTypes'
import './style'

const PuzzleLinks = ({ date: { year, month } }) => (
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
        <Heading {...{ level: 3 }}>
            {formatDate({ year, month })}
        </Heading>
        <Flex
            {...{
                justifyContent: 'normal',
                flexWrap: 'wrap',
                gap: 'xs',
            }}
        >
            {getListFromMap(puzzles[year][month]).reverse().map(
                (pageMaps, index) => (
                    <PuzzleLink
                        {...{
                            key: index,
                            ...pageMaps,
                        }}
                    />
                ),
            )}
        </Flex>
    </Flex>
)

PuzzleLinks.propTypes = {
    date: datePropTypes,
}

export default PuzzleLinks
