import React from 'react'
import cx from 'classnames'
import VisitButton from '..'
import Svg from '../../../Svg'
import twitter from '../../../../assets/svgs/twitter.svg'
import { TWITTER_ID } from '../../../../constants/socialMedia'

const TwitterButton = () => (
    <VisitButton
        {...{
            className: cx(
                'TwitterButton',
            ),
            id: TWITTER_ID,
            href: 'https://twitter.com/BobtailYearling',
        }}
    >
        <Svg
            {...{
                src: twitter,
            }}
        />
    </VisitButton>
)

export default TwitterButton
