import React, { useEffect } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import Flex from '../../Flex'
import Heading from '../../Heading'
import { mapPuzzleTestDate, mapPuzzleText } from '../../../redux/puzzle/selector'
import { formatDateWithDayOfWeek } from '../../../utils/date/format'
import { hsl } from '../../../utils/svgs'

const AdminPuzzleAside = () => {
    const
        puzzleTestDate = useSelector(mapPuzzleTestDate),
        puzzleText = useSelector(mapPuzzleText)

    const copyTextToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(puzzleText)
        } catch {
            setTimeout(copyTextToClipboard, 1000)
        }
    }

    useEffect(() => {
        copyTextToClipboard()
    }, [puzzleText])

    return (
        <Flex
            {...{
                className: cx(
                    'AdminPuzzleAside',
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
            <textarea
                readOnly
                {...{
                    style: {
                        height: '100%',
                        minWidth: '320px',
                        fontSize: '0.25em',
                    },
                    value: puzzleText,
                }}
            />
            <Button
                {...{
                    className: cx(
                        'colour__link',
                        'font__text',
                        'fontSize__md',
                    ),
                    handleButtonClick: copyTextToClipboard,
                }}
            >
            Copy
            </Button>
        </Flex>
    )
}

export default AdminPuzzleAside
