import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Flex from '../../Flex'
import PuzzleTestButton from '../Button'
import { updatePuzzleTestDate } from '../../../redux/admin/action'
import { mapPuzzleTestDate } from '../../../redux/admin/selector'
import { addDaysToDate } from '../../../utils/date'

const PuzzleTestGenerateButtons = ({ setPuzzle }) => {
    const
        dispatch = useDispatch(),
        puzzleTestDate = useSelector(mapPuzzleTestDate),
        nextDate = addDaysToDate(puzzleTestDate, 1)

    const setDateFirst = () => {
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
                    text: 'Generate', // Override text in puzzle props.
                    setPuzzle,
                }}
            />
            <PuzzleTestButton
                {...{
                    text: 'Next',
                    setPuzzle,
                    setDateFirst,
                }}
            />
        </Flex>
    )
}

PuzzleTestGenerateButtons.propTypes = {
    setPuzzle: PropTypes.func.isRequired,
}

export default PuzzleTestGenerateButtons
