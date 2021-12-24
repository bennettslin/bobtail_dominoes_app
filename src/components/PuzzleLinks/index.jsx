import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../hocs/DidMountHoc'
import Flex from '../Flex'
import Heading from '../Heading'
import PuzzleLink from './PuzzleLink'
import puzzles from '../../content/puzzles'
import { filterDateStructuredPages } from '../../utils/date/current'
import { formatMonthForDate } from '../../utils/date/format'
import './style'

const PuzzleLinks = ({ didMount }) => didMount && (
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
        {[...filterDateStructuredPages(puzzles)].reverse().map(yearMaps => {
            const year = parseInt(Object.keys(yearMaps)[0])
            return (
                <Flex
                    {...{
                        key: year,
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 'sm',
                    }}
                >
                    <Heading {...{ level: 3 }}>
                        {year.toString()}
                    </Heading>
                    {[...yearMaps[year]].reverse().map(monthMaps => {
                        const month = parseInt(Object.keys(monthMaps)[0])
                        return (
                            <Flex
                                {...{
                                    key: month,
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                    gap: 'xs',
                                }}
                            >
                                <Heading {...{ level: 5 }}>
                                    {formatMonthForDate(month)}
                                </Heading>
                                <Flex
                                    {...{
                                        justifyContent: 'normal',
                                        flexWrap: 'wrap',
                                        gap: 'xs',
                                    }}
                                >
                                    {[...monthMaps[month]].reverse().map(
                                        (pageMap, index) => (
                                            <PuzzleLink
                                                {...{
                                                    key: index,
                                                    ...pageMap,
                                                }}
                                            />
                                        ),
                                    )}
                                </Flex>
                            </Flex>
                        )
                    })}
                </Flex>
            )
        })}
    </Flex>
)

PuzzleLinks.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(PuzzleLinks)