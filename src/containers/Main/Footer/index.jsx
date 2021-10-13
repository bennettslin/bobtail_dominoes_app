import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import FollowButtons from '../../../components/FollowButtons'
import MailingList from '../../../components/MailingList'
import StyledFrame from '../../../components/Styled/Frame'
import StyledFrameBody from '../../../components/Styled/Frame/Body'
import { mapIsUpsellShown } from '../../../redux/option/selector'
import './style'

const MainFooter = ({ didMount }) => {
    const isUpsellShown = useSelector(mapIsUpsellShown)

    return (
        <CSSTransition
            {...{
                in: didMount && !isUpsellShown,
                timeout: 200,
                classNames: {
                    enterDone: 'shown',
                },
            }}
        >
            <StyledFrame
                {...{
                    className: cx(
                        'hidden',
                    ),
                }}
            >
                <StyledFrameBody
                    {...{
                        className: cx(
                            'MainFooter',
                        ),
                        justifyContent: 'space-between',
                    }}
                >
                    <MailingList />
                    <FollowButtons />
                </StyledFrameBody>
            </StyledFrame>
        </CSSTransition>
    )
}

MainFooter.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(MainFooter)
