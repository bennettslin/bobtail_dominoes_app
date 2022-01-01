import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Anchor from '../Anchor'
import Flex from '../Flex'
import puzzles from '../../content/puzzles'
import { formatDate } from '../../utils/date/format'
import { getNumberKeysFromMap } from '../../utils/general/keyMap'
import { getPagePathFromConfig } from '../../utils/pages/path/config'
import { datePropTypes } from '../../constants/propTypes'

const PuzzleMonthLinks = ({ date: { year }, topLevelPage }) => (
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
        {getNumberKeysFromMap(puzzles[year]).reverse().map(month => (
            <Anchor
                {...{
                    key: month,
                    pagePath: getPagePathFromConfig({
                        date: { year, month },
                        topLevelPage,
                    }),
                }}
            >
                {formatDate({ month })}
            </Anchor>
        ))}
    </Flex>
)

PuzzleMonthLinks.propTypes = {
    date: datePropTypes,
    topLevelPage: PropTypes.string.isRequired,
}

export default PuzzleMonthLinks
