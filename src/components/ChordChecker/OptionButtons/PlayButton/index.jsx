import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { queuePlay } from '../../../../redux/audio/action'
import {
    mapHasPlayableSonority,
    mapIsPlaying,
} from '../../../../redux/audio/selector'
import styleConfigAudio from '../../../../styles/arcade/audio'
import styleConfigFacesAudio from '../../../../styles/faces/audio'
import facePlay from '../../../../assets/svgs/checker/facePlay'

const PlayButton = () => {
    const
        dispatch = useDispatch(),
        isPlaying = useSelector(mapIsPlaying),
        hasPlayableSonority = useSelector(mapHasPlayableSonority)

    const onClick = () => {
        dispatch(queuePlay(true))
    }

    return (
        <CheckerButton
            {...{
                faceSrc: facePlay,
                disabled: isPlaying || !hasPlayableSonority,
                styleConfig: styleConfigAudio,
                faceStyleConfig: styleConfigFacesAudio,
                onClick,
            }}
        />
    )
}

export default PlayButton
