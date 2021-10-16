import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { updateQueuedPlay } from '../../../../redux/audio/action'
import play from '../../../../assets/svgs/chords/play'
import styleConfigAudio from '../../../../styles/checker/audio'
import { mapQueuedPlay } from '../../../../redux/audio/selector'

const PlayButton = () => {
    const
        dispatch = useDispatch(),
        queuedPlay = useSelector(mapQueuedPlay)

    const onClick = () => {
        dispatch(updateQueuedPlay(true))
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
