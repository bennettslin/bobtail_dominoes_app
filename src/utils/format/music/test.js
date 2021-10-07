import React from 'react'
import { getTextWithAccidentalsSeparated } from '.'
import { FLAT, SHARP } from '../../../constants/music'

describe('getTextWithAccidentalsSeparated', () => {
    it('returns array of text with accidentals separated', () => {
        expect(getTextWithAccidentalsSeparated(
            `C${SHARP}m7, D${FLAT}maj7`,
        )).toStrictEqual([
            'C',
            <span key={1} className="font__accidental text__sharp">
                {SHARP}
            </span>,
            'm7, D',
            <span key={3} className="font__accidental text__flat">
                {FLAT}
            </span>,
            'maj7',
        ])
    })
})
