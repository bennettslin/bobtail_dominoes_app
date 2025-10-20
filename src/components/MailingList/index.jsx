import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import MailingListAnchor from './Anchor'
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
        <div
            {...{
                className: cx(
                    'fontSize__sm',
                ),
            }}
        >
            {getFormattedText(
                `to the Bobtail Yearlings mailing list!`,
            )}
        </div>
    </Flex>
)

export default MailingList
