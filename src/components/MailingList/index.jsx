import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import MailingListAnchor from './Anchor'
import FinePrint from '../FinePrint'
import { getFormattedText } from '../../utils/format'
import './style'

const MailingList = () => (
    <Flex
        {...{
            className: cx(
                'MailingList',
            ),
            flexDirection: 'column',
        }}
    >
        <MailingListAnchor />
        <FinePrint>
            {getFormattedText(
                `We'll send a weekly newsletter of puzzles, plus the latest info.`,
            )}
        </FinePrint>
    </Flex>
)

export default MailingList
