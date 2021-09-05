import React from 'react'
import Heading from '../../../components/Heading'
import Anchor from '../../../components/Anchor'
import { title } from '../../../content/puzzles/2021/blah'
import { title as blahAgainTitle } from '../../../content/puzzles/2021/blah-again'

const Puzzles2021 = () => (
    <>
        <Heading {...{ level: 3 }}>2021</Heading>
        <Anchor {...{ pageLink: 'puzzles/2021/blah' }}>
            {title}
        </Anchor>
        <Anchor {...{ pageLink: 'puzzles/2021/blah-again' }}>
            {blahAgainTitle}
        </Anchor>
    </>
)

export default Puzzles2021
