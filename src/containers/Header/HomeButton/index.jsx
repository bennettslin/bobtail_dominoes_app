import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import Svg from '../../../components/Svg'
import bobtailDominoes from '../../../assets/svgs/bobtailDominoes.svg'
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
        <Svg
            {...{
                src: bobtailDominoes,
            }}
        />
    </HeaderButton>
)

export default HomeButton
