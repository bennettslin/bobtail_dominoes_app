import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import { mapPuzzleTestDate } from '../../../redux/admin/selector'
import { getDayOfWeekIndex } from '../../../utils/date/dayOfWeek'
import { getRegularPuzzle } from '../../../utils/music/puzzles/regular'
import { getMaximumPuzzle } from '../../../utils/music/puzzles/maximum'
import { getMissingPuzzle } from '../../../utils/music/puzzles/missing'
import { getPuzzleConfig } from '../helper'
import {
    MAXIMUM_PUZZLE_TYPE,
    MISSING_PUZZLE_TYPE,
} from '../../../constants/music/puzzle'

const PuzzleTestButton = ({
    text,
    customIndex,
    setPuzzle,
    setDateFirst,
}) => {
    const
        puzzleTestDate = useSelector(mapPuzzleTestDate),
        [isWaitingForDateChange, setIsWaitingForDateChange] = useState(false),
        defaultIndex = Number.isFinite(customIndex) ?
            customIndex :
            getDayOfWeekIndex(puzzleTestDate),
        {
            text: defaultText,
            puzzleType,
            ...rest
        } = getPuzzleConfig(defaultIndex)

    const generatePuzzle = () => {
        let getPuzzle = getRegularPuzzle

        if (puzzleType === MAXIMUM_PUZZLE_TYPE) {
            getPuzzle = getMaximumPuzzle
        } else if (puzzleType === MISSING_PUZZLE_TYPE) {
            getPuzzle = getMissingPuzzle
        }

        getPuzzle({ ...rest }).then(props => {
            setPuzzle(props)
        })
    }

    const handleButtonClick = () => {
        setPuzzle()

        if (setDateFirst) {
            setIsWaitingForDateChange(true)
            setDateFirst()
        } else {
            generatePuzzle()
        }
    }

    useEffect(() => {
        if (isWaitingForDateChange) {
            setIsWaitingForDateChange(false)
            generatePuzzle()
        }
    }, [puzzleTestDate])

    return (
        <Button
            {...{
                className: cx(
                    'colour__link',
                    'font__text',
                    'fontSize__md',
                ),
                handleButtonClick,
            }}
        >
            {text || defaultText}
        </Button>
    )
}

PuzzleTestButton.propTypes = {
    isNextDay: PropTypes.bool,
    text: PropTypes.string,
    customIndex: PropTypes.number,
    setPuzzle: PropTypes.func.isRequired,
    setDateFirst: PropTypes.func,
}

export default PuzzleTestButton
