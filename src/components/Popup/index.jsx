import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
import Flex from '../Flex'
import PopupView from './View'
import './style'

const Popup = ({
    popupName,
    isVisible,
    handleCloseClick,
    children,
}) => {
    return (
        <CSSTransition
            appear
            mountOnEnter
            unmountOnExit
            {...{
                in: isVisible,
                timeout: 200,
                classNames: {
                    exitActive: 'Popup__exiting',
                    enterDone: 'Popup__visible',
                },
            }}
        >
            <Flex
                {...{
                    className: cx(
                        'Popup',
                        popupName,
                    ),
                    onClick: handleCloseClick,
                }}
            >
                <PopupView
                    {...{
                        popupName,
                        isVisible,
                        handleCloseClick,
                        children,
                    }}
                />
            </Flex>
        </CSSTransition>
    )
}

Popup.propTypes = {
    popupName: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    handleCloseClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default Popup
