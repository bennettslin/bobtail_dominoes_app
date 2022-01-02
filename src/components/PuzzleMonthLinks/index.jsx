import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Anchor from '../Anchor'
import Flex from '../Flex'
import { formatDate } from '../../utils/date/format'
import { getPagePathFromConfig } from '../../utils/pages/path/config'
import { datePropTypes } from '../../constants/propTypes'
import { filterTimeEligiblePages } from '../../utils/date/current'

const PuzzleMonthLinks = ({ date: { year }, topLevelPage, monthsList }) => (
    <Flex
        {...{
            className: cx(
                'PuzzleMonthLinks',
                'fontSize__md',
            ),
            flexDirection: 'column',
            alignItems: 'start',
        }}
    >
        {filterTimeEligiblePages(
            monthsList.map(month => ({
                date: { year, month },
            })),
        ).map(({ date: { month } }) => (
            <Anchor
                {...{
                    key: month,
                    pagePath: getPagePathFromConfig({
                        date: { year, month },
                        topLevelPage,
                    }),
                }}
            >
                {formatDate({ date: { month } })}
            </Anchor>
        ))}
    </Flex>
)

PuzzleMonthLinks.propTypes = {
    date: datePropTypes,
    monthsList: PropTypes.arrayOf(
        PropTypes.number.isRequired,
    ).isRequired,
    topLevelPage: PropTypes.string.isRequired,
}

export default PuzzleMonthLinks
