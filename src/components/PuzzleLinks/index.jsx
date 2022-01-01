import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import PuzzleLink from './PuzzleLink'
import puzzles from '../../content/puzzles'
import { getListFromMap } from '../../utils/general/map'
import { datePropTypes } from '../../constants/propTypes'

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
