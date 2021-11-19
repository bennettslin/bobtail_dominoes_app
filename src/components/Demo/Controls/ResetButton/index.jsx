import React from 'react'
import { useDispatch } from 'react-redux'
import DemoButton from '../DemoButton'
import { initialiseGame } from '../../../../redux/game/action'
import faceTranspose from '../../../../assets/svgs/checker/faceTranspose'
import styleConfigReset from '../../../../styles/arcade/reset'
import styleConfigFacesReset from '../../../../styles/faces/reset'

const ResetButton = () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(initialiseGame())
    }

    return (
        <DemoButton
            {...{
                faceSrc: faceTranspose,
                styleConfig: styleConfigReset,
                faceStyleConfig: styleConfigFacesReset,
                onClick,
            }}
        />
    )
}

export default ResetButton
