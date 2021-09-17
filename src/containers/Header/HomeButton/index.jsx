import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import Svg from '../../../components/Svg'
import logo from '../../../assets/svgs/app/logo'
import { HOME_PAGE } from '../../../constants/pages'
import './style'

const HomeButton = () => (
    <HeaderButton
        {...{
            className: cx(
                'HomeButton',
            ),
            pagePath: HOME_PAGE,
        }}
    >
        <Svg
            {...{
                src: logo,
            }}
        />
    </HeaderButton>
)

export default HomeButton
