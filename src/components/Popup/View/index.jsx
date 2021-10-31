import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
import Flex from '../../Flex'
import PopupCloseButton from './CloseButton'
import './style'

const PopupView = ({
    popupName,
    isVisible,
    handleCloseClick,
    children,

}) => {
    const onClick = e => {
        e.stopPropagation()
    }
    return (
        <CSSTransition
            appear
            {...{
                in: isVisible,
                timeout: 200,
                classNames: {
                    enterDone: 'shown',
                },
            }}
        >
            <Flex
                {...{
                    className: cx(
                        'PopupView',
                        `${popupName}View`,
                        'hidden',
                    ),
                    flexDirection: 'column',
                    gap: 'sm',
                    onClick,
                }}
            >
                {children}
                <PopupCloseButton {...{ handleCloseClick }} />
            </Flex>
        </CSSTransition>
    )
}

PopupView.propTypes = {
    popupName: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    handleCloseClick: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
}

export default PopupView
