import React from 'react'
import cx from 'classnames'
import Flex from '../../Flex'
import Board from '../Board'
import GameLogs from '../GameLogs'
import PlayerCards from '../PlayerCards'
import Pool from '../Pool'
import './style'

const DemoBody = () => (
    <Flex
        {...{
            className: cx(
                'DemoBody',
            ),
            justifyContent: 'spaceBetween',
            alignItems: 'end',
            gap: 'xs',
        }}
    >
        <Flex
            {...{
                className: 'DemoBody__dominoes',
                flexDirection: 'column',
                gap: 'xs',
                style: {
                    overflow: 'hidden',
                },
            }}
        >
            <PlayerCards />
            <Pool />
        </Flex>
        <Board />
        <GameLogs />
    </Flex>
)

export default DemoBody
