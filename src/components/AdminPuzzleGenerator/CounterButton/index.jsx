import React from 'react'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import Button from '../../Button'
import { queueGenerateMonthPuzzle } from '../../../redux/puzzle/action'

const AdminPuzzleCounterButton = () => {
    const dispatch = useDispatch()

    const handleButtonClick = () => {
        dispatch(queueGenerateMonthPuzzle())
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
            Generate
        </Button>
    )
}

export default AdminPuzzleCounterButton
