import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../../../hocs/DidMountHoc'
import CheckerButton from '../../../ChordChecker/CheckerButton'
import { updateIsAutoplayOn } from '../../../../redux/audio/action'
import { mapIsAutoplayOn } from '../../../../redux/audio/selector'
import styleConfigAudio from '../../../../styles/checker/audio'
import styleConfigAudioOn from '../../../../styles/checker/audioOn'
import styleConfigFacesAudio from '../../../../styles/faces/audio'
import faceAutoplay from '../../../../assets/svgs/checker/faceAutoplay'

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
                faceSrc: faceAutoplay,
                styleConfig: styleConfigAudio,
                styleConfigOn: styleConfigAudioOn,
                faceStyleConfig: styleConfigFacesAudio,
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
