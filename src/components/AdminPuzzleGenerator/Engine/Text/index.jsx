import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appendPuzzleText } from '../../../../redux/puzzle/action'
import { mapPuzzle, mapPuzzleTestDate } from '../../../../redux/puzzle/selector'
import { getTextForPuzzle } from '../../../../utils/music/puzzles/format'

const AdminPuzzleTextEngine = () => {
    const
        dispatch = useDispatch(),
        puzzleTestDate = useSelector(mapPuzzleTestDate),
        puzzle = useSelector(mapPuzzle),
        { day } = puzzleTestDate

    const setPuzzleText = () => {
        dispatch(appendPuzzleText(
            getTextForPuzzle({
                day,
                ...puzzle,
            }),
        ))
    }

    useEffect(() => {
        if (puzzle) {
            setPuzzleText()
        }
    }, [puzzle])

    return null
}

export default AdminPuzzleTextEngine
