import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../../../Flex'
import StyledParagraph from '../../../../Styled/Paragraph'
import { mapCurrentPitchSet } from '../../../../../redux/chords/selector'
import { getChordAbbreviation } from '../../../../../utils/chords/label'
import './style'
import { getTextWithAccidentalsSeparated } from '../../../../../utils/format/music'

const ChordAbbreviation = () => {
    const
        currentPitchSet = useSelector(mapCurrentPitchSet),
        {
            rootLetter,
            type,
            sup,
        } = getChordAbbreviation(currentPitchSet)

    return (
        <Flex
            {...{
                className: cx(
                    'ChordAbbreviation',
                    'fontSize__md',
                ),
            }}
        >
            <StyledParagraph
                {...{
                    className: cx(
                        'ChordAbbreviation__paragraph',
                    ),
                }}
            >
                {getTextWithAccidentalsSeparated(rootLetter)}{type}
                {/* Always render sup tag for line height consistency. */}
                <sup>{sup}</sup>
            </StyledParagraph>
        </Flex>
    )
}

export default ChordAbbreviation
