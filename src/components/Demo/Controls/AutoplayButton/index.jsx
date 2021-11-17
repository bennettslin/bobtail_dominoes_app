import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../../../hocs/DidMountHoc'
import ArcadeButton from '../../../ArcadeButton'
import { updateIsDemoAutoplayOn } from '../../../../redux/game/action'
import { mapIsDemoAutoplayOn } from '../../../../redux/game/selector'
import styleConfigPlay from '../../../../styles/arcade/play'
import styleConfigPlayOn from '../../../../styles/arcade/playOn'
import styleConfigFacesPlay from '../../../../styles/faces/play'
import faceAutoplay from '../../../../assets/svgs/checker/faceAutoplay'

const AutoplayButton = ({ didMount }) => {
    const
        dispatch = useDispatch(),
        isAutoplayOn = useSelector(mapIsDemoAutoplayOn)

    const onClick = () => {
        dispatch(updateIsDemoAutoplayOn(!isAutoplayOn))
    }

    return (
        <ArcadeButton
            {...{
                faceSrc: faceAutoplay,
                styleConfig: styleConfigPlay,
                styleConfigOn: styleConfigPlayOn,
                faceStyleConfig: styleConfigFacesPlay,
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
