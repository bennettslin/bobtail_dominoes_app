import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import Flex from '../../Flex'
import Heading from '../../Heading'
import Paragraph from '../../Paragraph'
import { mapPuzzleTestDate } from '../../../redux/admin/selector'
import { formatDateWithDayOfWeek } from '../../../utils/date/format'
import { hsl } from '../../../utils/svgs'

const PuzzleTestAside = ({
    puzzleText,
    copyTextToClipboard,
}) => {
    const puzzleTestDate = useSelector(mapPuzzleTestDate)

    const handleButtonClick = () => (
        copyTextToClipboard()
    )

    return (
        <Flex
            {...{
                className: cx(
                    'PuzzleTestAside',
                ),
                flexDirection: 'column',
                gap: 'xs',
                style: {
                    height: '100%',
                    padding: '16px',
                    backgroundColor: hsl(170, 28, 87),
                    borderRadius: '16px',
                },
            }}
        >
            <Heading {...{ level: 5 }}>
                {formatDateWithDayOfWeek(puzzleTestDate)}
            </Heading>
            <Paragraph
                {...{
                    style: {
                        height: '100%',
                        minWidth: '240px',
                    },
                }}
            >
                {puzzleText}
            </Paragraph>
            <Button
                {...{
                    className: cx(
                        'colour__link',
                        'font__text',
                        'fontSize__md',
                    ),
                    handleButtonClick,
                }}
            >
            Copy
            </Button>
        </Flex>
    )
}

PuzzleTestAside.propTypes = {
    puzzleText: PropTypes.string.isRequired,
    copyTextToClipboard: PropTypes.func.isRequired,
}

export default PuzzleTestAside
