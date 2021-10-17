import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { queuePlay } from '../../../../redux/audio/action'
import { mapQueuedPlay } from '../../../../redux/audio/selector'
import styleConfigAudio from '../../../../styles/checker/audio'
import play from '../../../../assets/svgs/chords/play'

const PlayButton = () => {
    const
        dispatch = useDispatch(),
        queuedPlay = useSelector(mapQueuedPlay)

    const onClick = () => {
        dispatch(queuePlay())
    }

    return (
        <CheckerButton
            enableWithSonority
            {...{
                faceSrc: play,
                disabled: queuedPlay,
                styleConfig: styleConfigAudio,
                onClick,
            }}
        />
    )
}

export default PlayButton
