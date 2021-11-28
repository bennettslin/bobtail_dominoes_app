import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../hocs/DidMountHoc'
import Flex from '../Flex'
import Heading from '../Heading'
import PuzzleLink from './PuzzleLink'
import puzzles from '../../content/puzzles'
import './style'
import { formatMonthForDate } from '../../utils/date/format'

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
        {[...puzzles].reverse().map(yearMaps => {
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
                                <Flex {...{ gap: 'xs' }}>
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
