import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { queuePlay } from '../../../../redux/audio/action'
import { mapIsPlaying } from '../../../../redux/audio/selector'
import styleConfigAudio from '../../../../styles/checker/audio'
import styleConfigFacesAudio from '../../../../styles/faces/audio'
import facePlay from '../../../../assets/svgs/checker/facePlay'

const PlayButton = () => {
    const
        dispatch = useDispatch(),
        isPlaying = useSelector(mapIsPlaying)

    const onClick = () => {
        dispatch(queuePlay(true))
    }

    return (
        <CheckerButton
            enableWithSonority
            {...{
                faceSrc: facePlay,
                disabled: isPlaying,
                styleConfig: styleConfigAudio,
                faceStyleConfig: styleConfigFacesAudio,
                onClick,
            }}
        />
    )
}

export default PlayButton
