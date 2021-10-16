import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { updateQueuedPlay } from '../../../../redux/audio/action'
import pitchReset from '../../../../assets/svgs/chords/pitchReset'
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
                faceSrc: pitchReset,
                disabled: queuedPlay,
                styleConfig: styleConfigAudio,
                onClick,
            }}
        />
    )
}

export default PlayButton
