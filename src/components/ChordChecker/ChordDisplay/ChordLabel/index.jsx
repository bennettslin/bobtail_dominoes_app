import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../Flex'
import StyledText from '../../../Styled/Text'
import { mapCurrentPitchSet } from '../../../../redux/chords/selector'
import { getChordLabel } from '../../../../utils/chords/label'
import { getTextWithAccidentalsSeparated } from '../../../../utils/format/music'
import './style'

const ChordLabel = () => {
    const currentPitchSet = useSelector(mapCurrentPitchSet)

    return (
        <Flex
            {...{
                className: cx(
                    'ChordLabel',
                    'fontSize__md',
                ),
                flexDirection: 'column',
            }}
        >
            <StyledText isShadow>
                {getTextWithAccidentalsSeparated(
                    getChordLabel(currentPitchSet),
                )}
            </StyledText>
        </Flex>
    )
}

export default ChordLabel
