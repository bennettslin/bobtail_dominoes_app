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
            justifyContent: { xs: 'spaceBetween' },
            alignItems: 'end',
            gap: 'xs',
        }}
    >
        <Flex
            {...{
                className: 'DemoBody__dominoes',
                justifyContent: 'spaceEvenly',
                alignItems: 'normal',
                flexGrow: 1,
                gap: 'xs',
            }}
        >
            <PlayerCards />
            <Flex
                {...{
                    flexDirection: 'column',
                    flexGrow: 1,
                    gap: 'xs',
                }}
            >
                <Pool />
                <Controls />
            </Flex>
        </Flex>
        <Board />
        <GameLogs />
    </Flex>
)

export default DemoBody
