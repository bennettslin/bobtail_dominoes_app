import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../../../hocs/DidMountHoc'
import CheckerButton from '../../CheckerButton'
import { updateIsCheckerAutoplayOn } from '../../../../redux/checker/action'
import { mapIsCheckerAutoplayOn } from '../../../../redux/checker/selector'
import styleConfigAudio from '../../../../styles/arcade/audio'
import styleConfigAudioOn from '../../../../styles/arcade/audioOn'
import styleConfigFacesAudio from '../../../../styles/faces/audio'
import faceAutoplay from '../../../../assets/svgs/checker/faceAutoplay'

const AutoplayButton = ({ didMount }) => {
    const
        dispatch = useDispatch(),
        isCheckerAutoplayOn = useSelector(mapIsCheckerAutoplayOn)

    const onClick = () => {
        dispatch(updateIsCheckerAutoplayOn(!isCheckerAutoplayOn))
    }

    return (
        <CheckerButton
            {...{
                faceSrc: faceAutoplay,
                styleConfig: styleConfigAudio,
                styleConfigOn: styleConfigAudioOn,
                faceStyleConfig: styleConfigFacesAudio,
                isOn: didMount && isCheckerAutoplayOn,
                onClick,
            }}
        />
    )
}

AutoplayButton.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(AutoplayButton)
