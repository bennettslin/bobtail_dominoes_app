import React from 'react'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import Button from '../../../Button'
import { queueGeneratePuzzle, updatePuzzle } from '../../../../redux/puzzle/action'

const AdminPuzzleGenerateButton = () => {
    const dispatch = useDispatch()

    const handleButtonClick = () => {
        dispatch(updatePuzzle())
        dispatch(queueGeneratePuzzle(true))
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

export default AdminPuzzleGenerateButton
