import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../../../hocs/DidMountHoc'
import CheckerButton from '../../CheckerButton'
import { updateIsAutoplayOn } from '../../../../redux/audio/action'
import autoplay from '../../../../assets/svgs/chords/autoplay'
import styleConfigAudio from '../../../../styles/checker/audio'
import styleConfigAudioOn from '../../../../styles/checker/audioOn'
import { mapIsAutoplayOn } from '../../../../redux/audio/selector'

const AutoplayButton = ({ didMount }) => {
    const
        dispatch = useDispatch(),
        isAutoplayOn = useSelector(mapIsAutoplayOn)

    const onClick = () => {
        dispatch(updateIsAutoplayOn(!isAutoplayOn))
    }

    return (
        <CheckerButton
            {...{
                faceSrc: autoplay,
                styleConfig: styleConfigAudio,
                styleConfigOn: styleConfigAudioOn,
                isOn: didMount && isAutoplayOn,
                onClick,
            }}
        />
    )
}

AutoplayButton.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(AutoplayButton)
