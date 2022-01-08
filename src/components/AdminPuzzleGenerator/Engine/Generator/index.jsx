import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { queueGeneratePuzzle, updatePuzzle } from '../../../../redux/puzzle/action'
import { mapGeneratePuzzleConfig } from '../../../../redux/puzzle/selector'
import { getPuzzle } from '../../../../utils/music/puzzles'

const AdminPuzzleGeneratorEngine = () => {
    const
        dispatch = useDispatch(),
        generatePuzzleConfig = useSelector(mapGeneratePuzzleConfig)

    const generatePuzzle = () => {
        getPuzzle(generatePuzzleConfig).then(puzzle => {
            dispatch(queueGeneratePuzzle(false))
            dispatch(updatePuzzle(puzzle))
        })
    }

    useEffect(() => {
        if (generatePuzzleConfig) {
            generatePuzzle()
        }
    }, [generatePuzzleConfig])

    return null
}

export default AdminPuzzleGeneratorEngine
