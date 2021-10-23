import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../../Flex'
import StyledShadow from '../../../../Styled/Shadow'
import Svg from '../../../../Svg'
import { mapCurrentPitchSet } from '../../../../../redux/audio/selector'
import { getIsChord, getIsIllegalRow } from '../../../../../utils/music/chords/valid'
import styleConfigDominoes from '../../../../../styles/dominoes'
import iconValid from '../../../../../assets/svgs/chords/iconValid'
import iconInvalid from '../../../../../assets/svgs/chords/iconInvalid'
import './style'

const ValidIcon = () => {
    const currentPitchSet = useSelector(mapCurrentPitchSet),
        isChord = getIsChord(currentPitchSet)

    return (getIsIllegalRow(currentPitchSet) || isChord) && (
        <Flex
            {...{
                className: cx(
                    'ValidIcon',
                ),
            }}
        >
            <StyledShadow>
                <Svg
                    {...{
                        key: isChord,
                        className: cx(
                            'ValidIcon__icon',
                        ),
                        src: isChord ? iconValid : iconInvalid,
                        styleConfig: styleConfigDominoes,
                    }}
                />
            </StyledShadow>
        </Flex>
    )
}

export default ValidIcon
