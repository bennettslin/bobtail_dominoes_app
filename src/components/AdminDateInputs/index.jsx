import React from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Flex from '../Flex'
import {
    updateAdminCurrentDate,
    updatePuzzleTestDate,
} from '../../redux/admin/action'
import { getDateFromInputValue, getInputValueFromDate } from '../../utils/date/input'
import {
    mapAdminCurrentDate,
    mapPuzzleTestDate,
} from '../../redux/admin/selector'

const AdminDateInputs = () => {
    const
        dispatch = useDispatch(),
        adminCurrentDate = useSelector(mapAdminCurrentDate),
        puzzleTestDate = useSelector(mapPuzzleTestDate)

    const handleAdminCurrentDate = ({ target: { value } }) => {
        dispatch(updateAdminCurrentDate(getDateFromInputValue(value)))
    }

    const handlePuzzleTestDate = ({ target: { value } }) => {
        dispatch(updatePuzzleTestDate(getDateFromInputValue(value)))
    }

    return (
        <Flex
            {...{
                className: cx(
                    'PuzzleTest__dateInputs',
                ),
                justifyContent: 'spaceEvenly',
                gap: 'xs',
            }}
        >
            <Flex
                {...{
                    flexDirection: 'column',
                }}
            >
                <label>
                    adminCurrentDate
                </label>
                <input
                    {...{
                        type: 'date',
                        value: getInputValueFromDate(adminCurrentDate),
                        onChange: handleAdminCurrentDate,
                    }}
                />
            </Flex>
            <Flex
                {...{
                    flexDirection: 'column',
                }}
            >
                <label>
                    puzzleTestDate
                </label>
                <input
                    {...{
                        type: 'date',
                        value: getInputValueFromDate(puzzleTestDate),
                        onChange: handlePuzzleTestDate,
                    }}
                />
            </Flex>
        </Flex>
    )
}

export default AdminDateInputs
