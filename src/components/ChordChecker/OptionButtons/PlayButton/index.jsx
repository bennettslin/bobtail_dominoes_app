import React from 'react'
import { useDispatch } from 'react-redux'
import CheckerButton from '../../CheckerButton'
import { updateQueuedPlay } from '../../../../redux/audio/action'
import pitchReset from '../../../../assets/svgs/chords/pitchReset'
import styleConfigAudio from '../../../../styles/checker/audio'

const PlayButton = () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(updateQueuedPlay(true))
    }

    return (
        <CheckerButton
            enableWithSonority
            {...{
                faceSrc: pitchReset,
                styleConfig: styleConfigAudio,
                onClick,
            }}
        />
    )
}

export default PlayButton
