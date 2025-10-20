import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import MailingListAnchor from './Anchor'
import Markdown from '../Markdown'
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
        <Markdown>
            {getFormattedText(
                `to the Bobtail Yearlings mailing list!`,
            )}
        </Markdown>
    </Flex>
)

export default MailingList
