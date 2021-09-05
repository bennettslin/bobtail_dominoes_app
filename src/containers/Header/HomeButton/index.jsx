import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import { HOME_PAGE } from '../../../constants/pages'
import './style'

const HomeButton = () => (
    <HeaderButton
        {...{
            className: cx(
                'HomeButton',
            ),
            pageLink: HOME_PAGE,
        }}
    >
        {`Bobtail\u00a0Dominoes`}
    </HeaderButton>
)

export default HomeButton
