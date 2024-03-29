import React, { useContext } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import AppLoadedContext from '../../../contexts/AppLoaded'
import Flex from '../../../components/Flex'
// import FollowButtons from '../../../components/FollowButtons'
import MailingList from '../../../components/MailingList'
import StyledFrame from '../../../components/Styled/Frame'
import StyledFrameBody from '../../../components/Styled/Frame/Body'
import YearlingsBobtailUpsell from './YearlingsBobtailUpsell'
import { mapIsUpsellShown } from '../../../redux/option/selector'
import './style'

const MainFooter = () => {
    const
        { didAppLoad } = useContext(AppLoadedContext),
        isUpsellShown = useSelector(mapIsUpsellShown)

    return (
        <CSSTransition
            appear
            {...{
                in: didAppLoad && !isUpsellShown,
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
                    order: 3,
                }}
            >
                <StyledFrameBody
                    {...{
                        className: cx(
                            'MainFooter',
                        ),
                        justifyContent: 'spaceBetween',
                        alignItems: 'normal',
                        gap: 'sm',
                    }}
                >
                    <Flex
                        {...{
                            className: cx(
                                'MainFooter__social',
                            ),
                            flexDirection: 'column',
                            justifyContent: 'spaceEvenly',
                            flexGrow: 1,
                            gap: 'sm',
                        }}
                    >
                        <MailingList />
                        {/* <FollowButtons /> */}
                    </Flex>
                    <YearlingsBobtailUpsell />
                </StyledFrameBody>
            </StyledFrame>
        </CSSTransition>
    )
}

export default MainFooter
