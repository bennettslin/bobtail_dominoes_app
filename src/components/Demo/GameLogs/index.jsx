import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Flex from '../../Flex'
import TurnLog from './TurnLog'
import { mapHandCount, mapPlayersCount, mapTurnsCount } from '../../../redux/game/selector'
import { getArrayOfIndices } from '../../../utils/general'
import './style'

const GameLogs = () => {
    const
        gameLogsRef = useRef(),
        turnsCount = useSelector(mapTurnsCount),
        playersCount = useSelector(mapPlayersCount),
        handCount = useSelector(mapHandCount),
        [scrollHeight, setScrollHeight] = useState(0)

    useEffect(() => {
        const {
            scrollTop,
            clientHeight,
            scrollHeight: nextScrollHeight,
        } = gameLogsRef?.current

        // If we're scrolled to the bottom for the current scroll height...
        if (scrollTop + clientHeight === scrollHeight) {
            // Scroll to the bottom for the next scroll height.
            gameLogsRef.current.scrollTop = nextScrollHeight - clientHeight
        }

        setScrollHeight(nextScrollHeight)
    }, [turnsCount])

    return (
        <Flex
            {...{
                ref: gameLogsRef,
                className: cx(
                    'GameLogs',
                    'fontSize__sm',
                ),
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                gap: 'xs',
                style: {
                    backgroundColor: '#ddb',
                },
            }}
        >
            {getArrayOfIndices(turnsCount).map(turnIndex => (
                <Flex
                    {...{
                        key: turnIndex,
                        flexDirection: 'column',
                        alignItems: 'normal',
                    }}
                >
                    <TurnLog {...{
                        key: turnIndex,
                        turnIndex,
                        playersCount,
                        handCount,
                    }} />
                </Flex>
            ))}
        </Flex>
    )
}

export default GameLogs
