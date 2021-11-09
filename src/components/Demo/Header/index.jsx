import React from 'react'
import HomeButton from '../../../containers/Main/Header/HomeButton'
import Menu from '../../../containers/Main/Header/Menu'
import Flex from '../../Flex'

const DemoHeader = () => (
    <Flex
        {...{
            justifyContent: 'spaceBetween',
        }}
    >
        <HomeButton />
        <Menu />
    </Flex>
)

export default DemoHeader
