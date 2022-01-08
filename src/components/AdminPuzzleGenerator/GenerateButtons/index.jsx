import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Flex from '../../Flex'
import PuzzleTestButton from '../Button'
import { updatePuzzleTestDate } from '../../../redux/admin/action'
import { mapPuzzleTestDate } from '../../../redux/admin/selector'
import { addDaysToDate } from '../../../utils/date'

const AdminPuzzleGenerateButtons = ({ setPuzzle }) => {
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
                    'AdminPuzzleGenerateButtons',
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

AdminPuzzleGenerateButtons.propTypes = {
    setPuzzle: PropTypes.func.isRequired,
}

export default AdminPuzzleGenerateButtons
