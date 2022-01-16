import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { queueCheckerPlay } from '../../../redux/checker/action'
import {
    mapCheckerPitchSet,
    mapHasPlayableCheckerSonority,
    mapIsCheckerAutoplayOn,
    mapIsCheckerPlaying,
    mapCheckerPitchConfigs,
} from '../../../redux/checker/selector'
import { ANIMATED_TOTAL_DURATION } from '../../../constants/music/audio'

const ChordCheckerEngine = () => {
    const
        dispatch = useDispatch(),
        isCheckerAutoplayOn = useSelector(mapIsCheckerAutoplayOn),
        isCheckerPlaying = useSelector(mapIsCheckerPlaying),
        hasPlayableCheckerSonority = useSelector(mapHasPlayableCheckerSonority),
        checkerPitchSet = useSelector(mapCheckerPitchSet),
        checkerPitchConfigs = useSelector(mapCheckerPitchConfigs)

    const setTimeoutForPlayEnd = () => {
        setTimeout(() => {
            dispatch(queueCheckerPlay(false))
        }, ANIMATED_TOTAL_DURATION * 1000)
    }

    useEffect(() => {
        if (checkerPitchConfigs) {
            setTimeoutForPlayEnd()
        }
    }, [checkerPitchConfigs])

    useEffect(() => {
        if (isCheckerAutoplayOn && !isCheckerPlaying) {
            if (hasPlayableCheckerSonority) {
                dispatch(queueCheckerPlay(true))
            }
        }
    }, [isCheckerAutoplayOn, checkerPitchSet])

    return null
}

export default ChordCheckerEngine
