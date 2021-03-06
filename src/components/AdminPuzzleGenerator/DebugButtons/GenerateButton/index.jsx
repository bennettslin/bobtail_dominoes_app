import React from 'react'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import Button from '../../../Button'
import { queueGeneratePuzzle } from '../../../../redux/puzzle/action'

const AdminPuzzleGenerateButton = () => {
    const dispatch = useDispatch()

    const handleButtonClick = () => {
        dispatch(queueGeneratePuzzle())
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
            Test
        </Button>
    )
}

export default AdminPuzzleGenerateButton
