import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { queuePlay } from '../../../redux/audio/action'
import {
    mapCurrentPitchSet,
    mapHasPlayableSonority,
    mapIsAutoplayOn,
    mapIsPlaying,
    mapPlayedPitchConfigs,
} from '../../../redux/audio/selector'
import { ANIMATED_TOTAL_DURATION } from '../../../constants/music/audio'

const ChordCheckerEngine = () => {
    const
        dispatch = useDispatch(),
        isAutoplayOn = useSelector(mapIsAutoplayOn),
        isPlaying = useSelector(mapIsPlaying),
        hasPlayableSonority = useSelector(mapHasPlayableSonority),
        currentPitchSet = useSelector(mapCurrentPitchSet),
        playedPitchConfigs = useSelector(mapPlayedPitchConfigs)

    const setTimeoutForPlayEnd = () => {
        setTimeout(() => {
            dispatch(queuePlay(false))
        }, ANIMATED_TOTAL_DURATION * 1000)
    }

    useEffect(() => {
        if (playedPitchConfigs) {
            setTimeoutForPlayEnd()
        }
    }, [playedPitchConfigs])

    useEffect(() => {
        if (isAutoplayOn && !isPlaying) {
            if (hasPlayableSonority) {
                dispatch(queuePlay(true))
            }
        }
    }, [isAutoplayOn, currentPitchSet])

    return null
}

export default ChordCheckerEngine
