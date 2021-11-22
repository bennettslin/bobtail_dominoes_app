import React from 'react'
import cx from 'classnames'
import Flex from '../../Flex'
import Board from '../Board'
import Controls from '../Controls'
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
            alignItems: 'flexEnd',
            gap: 'xs',
        }}
    >
        <Board />
        <Flex
            {...{
                className: 'DemoBody__dominoes',
                justifyContent: 'spaceEvenly',
                alignItems: 'normal',
                flexGrow: 1,
                gap: 'sm',
                order: 1,
            }}
        >
            <PlayerCards />
            <Flex
                {...{
                    className: 'DemoBody__poolControls',
                    flexDirection: 'column',
                    flexGrow: 1,
                    gap: 'sm',
                }}
            >
                <Pool />
                <Controls />
            </Flex>
        </Flex>
        <GameLogs />
    </Flex>
)

export default DemoBody
