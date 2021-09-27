import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../../../components/Button'
import DominoSvg from '../../../../components/Svgs/Domino'
import logo from '../../../../assets/svgs/app/logo'
import { getMapIsSelectedOrTabbedPath } from '../../../../redux/page/selector'
import { HOME_PAGE } from '../../../../constants/pages'

const HomeButton = () => {
    const isSelectedOrTabbedPath = useSelector(
        getMapIsSelectedOrTabbedPath(HOME_PAGE),
    )

    return (
        <Button
            {...{
                className: cx(
                    'HomeButton',
                ),
                pagePath: HOME_PAGE,
                isSelected: isSelectedOrTabbedPath,
            }}
        >
            <DominoSvg
                {...{
                    src: logo,
                    isFigure: false,
                }}
            />
        </Button>
    )
}

export default HomeButton
