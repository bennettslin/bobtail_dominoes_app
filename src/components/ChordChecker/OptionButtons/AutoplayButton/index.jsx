import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../../../hocs/DidMountHoc'
import CheckerButton from '../../CheckerButton'
import { updateIsAutoplayOn } from '../../../../redux/audio/action'
import pitchReset from '../../../../assets/svgs/chords/pitchReset'
import styleConfigAudio from '../../../../styles/checker/audio'
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
                faceSrc: pitchReset,
                styleConfig: styleConfigAudio,
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
