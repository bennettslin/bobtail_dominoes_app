import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { queueCheckerPlay } from '../../../../redux/checker/action'
import {
    mapHasPlayableCheckerSonority,
    mapIsCheckerPlaying,
} from '../../../../redux/checker/selector'
import styleConfigAudio from '../../../../styles/arcade/audio'
import styleConfigFacesAudio from '../../../../styles/faces/audio'
import facePlay from '../../../../assets/svgs/checker/facePlay'

const PlayButton = () => {
    const
        dispatch = useDispatch(),
        isCheckerPlaying = useSelector(mapIsCheckerPlaying),
        hasPlayableCheckerSonority = useSelector(mapHasPlayableCheckerSonority)

    const onClick = () => {
        dispatch(queueCheckerPlay(true))
    }

    return (
        <CheckerButton
            {...{
                faceSrc: facePlay,
                disabled: isCheckerPlaying || !hasPlayableCheckerSonority,
                styleConfig: styleConfigAudio,
                faceStyleConfig: styleConfigFacesAudio,
                onClick,
            }}
        />
    )
}

export default PlayButton
