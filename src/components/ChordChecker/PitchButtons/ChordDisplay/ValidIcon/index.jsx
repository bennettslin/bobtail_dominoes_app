import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../../Flex'
import DominoSvg from '../../../../Svgs/Domino'
import { mapCurrentPitchSet } from '../../../../../redux/chords/selector'
import { getIsChord, getIsLegalRow } from '../../../../../utils/chords/valid'
import iconValid from '../../../../../assets/svgs/chords/iconValid'
import iconInvalid from '../../../../../assets/svgs/chords/iconInvalid'
import './style'

const ValidIcon = () => {
    const currentPitchSet = useSelector(mapCurrentPitchSet)

    return (
        <Flex
            {...{
                className: cx(
                    'ValidIcon',
                ),
            }}
        >
            {getIsLegalRow(currentPitchSet) ? (
                getIsChord(currentPitchSet) && (
                    <DominoSvg
                        {...{
                            src: iconValid,
                            isFigure: false,
                        }}
                    />
                )
            ) : (
                <DominoSvg
                    {...{
                        src: iconInvalid,
                        isFigure: false,
                    }}
                />
            )}
        </Flex>
    )
}

export default ValidIcon
