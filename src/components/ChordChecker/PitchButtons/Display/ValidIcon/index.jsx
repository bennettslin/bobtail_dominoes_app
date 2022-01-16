import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../../Flex'
import StyledShadow from '../../../../Styled/Shadow'
import Svg from '../../../../Svg'
import { mapCheckerPitchSet } from '../../../../../redux/checker/selector'
import { getIsValidChord, getIsInvalidSonority } from '../../../../../utils/music/chords/valid'
import styleConfigDominoes from '../../../../../styles/dominoes'
import iconValid from '../../../../../assets/svgs/checker/iconValid'
import iconInvalid from '../../../../../assets/svgs/checker/iconInvalid'
import './style'

const ValidIcon = () => {
    const checkerPitchSet = useSelector(mapCheckerPitchSet),
        isValidChord = getIsValidChord(checkerPitchSet)

    return (getIsInvalidSonority(checkerPitchSet) || isValidChord) && (
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
                        key: isValidChord,
                        className: cx(
                            'ValidIcon__icon',
                        ),
                        src: isValidChord ? iconValid : iconInvalid,
                        styleConfig: styleConfigDominoes,
                    }}
                />
            </StyledShadow>
        </Flex>
    )
}

export default ValidIcon
