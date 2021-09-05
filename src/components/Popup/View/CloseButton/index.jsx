import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../Button'
import Svg from '../../../Svg'
import popupClose from '../../../../assets/svgs/popupClose'
import './style'

const PopupCloseButton = ({
    handleCloseClick,
}) => {
    return (
        <Button
            {...{
                className: cx(
                    'PopupCloseButton',
                ),
                handleButtonClick: handleCloseClick,
            }}
        >
            <Svg
                {...{
                    src: popupClose,
                }}
            />
        </Button>
    )
}

PopupCloseButton.propTypes = {
    handleCloseClick: PropTypes.func.isRequired,
}

export default PopupCloseButton
