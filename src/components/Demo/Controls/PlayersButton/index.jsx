import React from 'react'
import { useDispatch } from 'react-redux'
import CheckerButton from '../../../ChordChecker/CheckerButton'
import { updateCurrentPitchSet } from '../../../../redux/audio/action'
import faceTranspose from '../../../../assets/svgs/checker/faceTranspose'
import styleConfigOption from '../../../../styles/checker/option'
import styleConfigFacesOption from '../../../../styles/faces/option'

const PlayersButton = () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(updateCurrentPitchSet())
    }

    return (
        <CheckerButton
            {...{
                faceSrc: faceTranspose,
                styleConfig: styleConfigOption,
                faceStyleConfig: styleConfigFacesOption,
                onClick,
            }}
        />
    )
}

export default PlayersButton
