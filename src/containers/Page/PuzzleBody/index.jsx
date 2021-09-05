import React from 'react'
import PropTypes from 'prop-types'
import Body from '../Body'
import MultiPageFooter from '../../../components/MultiPageFooter'
import Markdown from '../../../components/Markdown'
import Heading from '../../../components/Heading'
import { getMonthName } from './helper'
import { PUZZLES_PAGE } from '../../../constants/pages'

const PuzzleBody = ({
    title,
    year,
    month,
    day,
    children,
}) => (
    <>
        <Body {...{ title }}>
            {year && month && day && (
                <Heading {...{ level: 5 }}>
                    {`${day} ${getMonthName(month)} ${year}`}
                </Heading>
            )}
            <Markdown>
                {children}
            </Markdown>
        </Body>
        <MultiPageFooter {...{ backPage: PUZZLES_PAGE }} />
    </>
)

PuzzleBody.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    month: PropTypes.number,
    day: PropTypes.number,
    children: PropTypes.string.isRequired,
}

export default PuzzleBody
