import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../Button'
import { updatePuzzleTestDate } from '../../../../redux/puzzle/action'
import { mapPuzzleTestDate } from '../../../../redux/puzzle/selector'
import { addDaysToDate } from '../../../../utils/date'

const AdminPuzzleDateButton = ({ direction, children }) => {
    const
        dispatch = useDispatch(),
        puzzleTestDate = useSelector(mapPuzzleTestDate)

    const handleButtonClick = () => {
        dispatch(
            updatePuzzleTestDate(
                addDaysToDate(puzzleTestDate, direction),
            ),
        )
    }

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
            {children}
        </Button>
    )
}

AdminPuzzleDateButton.propTypes = {
    children: PropTypes.string.isRequired,
    direction: PropTypes.number.isRequired,
}

export default AdminPuzzleDateButton
