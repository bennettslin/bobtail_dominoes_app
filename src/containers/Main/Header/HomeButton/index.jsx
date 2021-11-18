import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../../../components/Button'
import DominoesSvg from '../../../../components/Svgs/Dominoes'
import logo from '../../../../assets/svgs/app/logo'
import { getMapIsSelectedPagePath } from '../../../../redux/page/selector'
import { HOME_PAGE } from '../../../../constants/pages'
import './style'

const HomeButton = ({ onLoad }) => {
    const isSelected = useSelector(getMapIsSelectedPagePath(HOME_PAGE))

    return (
        <Button
            dropShadow
            {...{
                className: cx(
                    'HomeButton',
                ),
                pagePath: HOME_PAGE,
                isSelected,
            }}
        >
            <DominoesSvg
                {...{
                    className: cx(
                        'HomeButton__svg',
                    ),
                    src: logo,
                    isFigure: false,
                    onLoad,
                }}
            />
        </Button>
    )
}

HomeButton.propTypes = {
    onLoad: PropTypes.func,
}

export default HomeButton
