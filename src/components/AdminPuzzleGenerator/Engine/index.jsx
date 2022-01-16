import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { queueCheckerPlay, updateCheckerPitchSet } from '../../../redux/checker/action'
import { updatePuzzle } from '../../../redux/puzzle/action'
import { mapGeneratePuzzleConfig, mapPuzzleEndDate } from '../../../redux/puzzle/selector'
import { getPuzzle } from '../../../utils/music/puzzles'

const AdminPuzzleEngine = () => {
    const
        dispatch = useDispatch(),
        generatePuzzleConfig = useSelector(mapGeneratePuzzleConfig),
        puzzleEndDate = useSelector(mapPuzzleEndDate)

    const generatePuzzle = () => {
        getPuzzle(generatePuzzleConfig).then(puzzle => {
            dispatch(updatePuzzle(puzzle))
        })
    }

    useEffect(() => {
        if (generatePuzzleConfig) {
            generatePuzzle()
        }
    }, [generatePuzzleConfig])

    useEffect(() => {
        if (!puzzleEndDate) {
            dispatch(queueCheckerPlay(true))
        }
    }, [puzzleEndDate])

    useEffect(() => {
        // Make notification sound a happy C major chord.
        dispatch(updateCheckerPitchSet(new Set([0, 4, 7])))
    }, [])

    return null
}

export default AdminPuzzleEngine
