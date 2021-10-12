import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../../Flex'
import StyledText from '../../../../Styled/Text'
import { mapCurrentPitchSet } from '../../../../../redux/chords/selector'
import { getChordAbbreviation } from '../../../../../utils/chords/label'
import './style'
import { getTextWithAccidentalsSeparated } from '../../../../../utils/format/music'

const ChordAbbreviation = () => {
    const
        currentPitchSet = useSelector(mapCurrentPitchSet),
        {
            root,
            type,
            sup,
        } = getChordAbbreviation(currentPitchSet)

    return (
        <Flex
            {...{
                className: cx(
                    'ChordAbbreviation',
                ),
            }}
        >
            <StyledText isShadow>
                {getTextWithAccidentalsSeparated(root)}{type}
                {/* Always render sup tag for line height consistency. */}
                <sup>{sup}</sup>
            </StyledText>
        </Flex>
    )
}

export default ChordAbbreviation
