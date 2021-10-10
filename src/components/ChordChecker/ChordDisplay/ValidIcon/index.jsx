import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../Flex'
import DominoSvg from '../../../Svgs/Domino'
import { mapCurrentPitchSet } from '../../../../redux/chords/selector'
import { getIsChord, getIsLegalRow } from '../../../../utils/chords/valid'
import checkerValid from '../../../../assets/svgs/chords/checkerValid'
import checkerInvalid from '../../../../assets/svgs/chords/checkerInvalid'
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
                            src: checkerValid,
                            isFigure: false,
                        }}
                    />
                )
            ) : (
                <DominoSvg
                    {...{
                        src: checkerInvalid,
                        isFigure: false,
                    }}
                />
            )}
        </Flex>
    )
}

export default ValidIcon
