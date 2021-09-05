import React from 'react'
import cx from 'classnames'
import VisitButton from '..'
import Svg from '../../../Svg'
import facebook from '../../../../assets/svgs/facebook.svg'
import { FACEBOOK_ID } from '../../../../constants/socialMedia'

const FacebookButton = () => (
    <VisitButton
        {...{
            className: cx(
                'FacebookButton',
            ),
            id: FACEBOOK_ID,
            href: 'https://www.facebook.com/BobtailYearlings',
        }}
    >
        <Svg
            {...{
                src: facebook,
            }}
        />
    </VisitButton>
)

export default FacebookButton
