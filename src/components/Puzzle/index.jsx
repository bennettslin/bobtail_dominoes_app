import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PageConfigContext from '../../contexts/PageConfig'
import Button from '../Button'
import Flex from '../Flex'
import DominoesSvg from '../Svgs/Dominoes'
import { getIsPastOrPresentDate } from '../../utils/date/current'
import { addDaysToDate } from '../../utils/date'
import './style'

const Puzzle = ({
    answer,
    puzzle,
}) => {
    const
        { date } = useContext(PageConfigContext),
        [showAnswer, setShowAnswer] = useState(false),
        canShowAnswer = getIsPastOrPresentDate(addDaysToDate(date, 1))

    const handleButtonClick = () => {
        setShowAnswer(!showAnswer)
    }

    return (
        <Flex
            {...{
                className: cx(
                    'Puzzle',
                ),
                flexDirection: 'column',
                alignItems: 'normal',
                gap: 'xs',
            }}
        >
            <DominoesSvg
                {...{
                    src: canShowAnswer && showAnswer ?
                        answer :
                        puzzle,
                }}
            />
            {canShowAnswer ? (
                <Button
                    {...{
                        className: cx(
                            'colour__link',
                            'font__text',
                        ),
                        handleButtonClick,
                    }}
                >
                    {showAnswer ? 'Hide answer' : 'Show answer'}
                </Button>
            ) : (
                'Check back tomorrow for the answer!'
            )}
        </Flex>
    )
}

Puzzle.propTypes = {
    answer: PropTypes.string.isRequired,
    puzzle: PropTypes.string.isRequired,
}

export default Puzzle
