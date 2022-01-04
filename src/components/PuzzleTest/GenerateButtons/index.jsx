import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Flex from '../../Flex'
import PuzzleTestButton from '../Button'
import { updatePuzzleTestDate } from '../../../redux/admin/action'
import { mapPuzzleTestDate } from '../../../redux/admin/selector'
import { addDaysToDate } from '../../../utils/date'
import { getDayOfWeekIndex } from '../../../utils/date/dayOfWeek'
import { getPuzzleConfig } from '../helper'

const PuzzleTestGenerateButtons = ({ setPuzzle }) => {
    const
        dispatch = useDispatch(),
        puzzleTestDate = useSelector(mapPuzzleTestDate),
        {
            ...puzzleProps
        } = getPuzzleConfig(getDayOfWeekIndex(puzzleTestDate)),
        nextDate = addDaysToDate(puzzleTestDate, 1),
        {
            ...nextPuzzleProps
        } = getPuzzleConfig(getDayOfWeekIndex(nextDate))

    const handleGenerateNext = () => {
        setPuzzle(nextPuzzleProps)
        dispatch(updatePuzzleTestDate(nextDate))
    }

    return (
        <Flex
            {...{
                className: cx(
                    'PuzzleTestGenerateButtons',
                ),
                justifyContent: 'spaceEvenly',
                gap: 'xs',
            }}
        >
            <PuzzleTestButton
                {...{
                    setPuzzle,
                    ...puzzleProps,
                    text: 'Generate', // Override text in puzzle props.
                }}
            />
            <PuzzleTestButton
                {...{
                    setPuzzle: handleGenerateNext,
                    ...nextPuzzleProps,
                    text: 'Next',
                }}
            />
        </Flex>
    )
}

PuzzleTestGenerateButtons.propTypes = {
    setPuzzle: PropTypes.func.isRequired,
}

export default PuzzleTestGenerateButtons
