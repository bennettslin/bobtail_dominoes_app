import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import DominoSvg from '../../../../components/Svgs/Domino'
import logo from '../../../../assets/svgs/app/logo'
import { HOME_PAGE } from '../../../../constants/pages'

const HomeButton = () => (
    <HeaderButton
        {...{
            className: cx(
                'HomeButton',
            ),
            pagePath: HOME_PAGE,
        }}
    >
        <DominoSvg
            {...{
                src: logo,
                isFigure: false,
            }}
        />
    </HeaderButton>
)

export default HomeButton
