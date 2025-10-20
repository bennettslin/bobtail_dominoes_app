import React, { useContext } from 'react'
import cx from 'classnames'
import { CSSTransition } from 'react-transition-group'
import AppLoadedContext from '../../../contexts/AppLoaded'
import Flex from '../../../components/Flex'
import MailingList from '../../../components/MailingList'
import StyledFrame from '../../../components/Styled/Frame'
import StyledFrameBody from '../../../components/Styled/Frame/Body'
import YearlingsBobtailUpsell from './YearlingsBobtailUpsell'
import './style'

const MainFooter = () => {
    const { didAppLoad } = useContext(AppLoadedContext)

    return (
        <CSSTransition
            appear
            {...{
                in: didAppLoad,
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
                        justifyContent: 'spaceEvenly',
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
                            gap: 'sm',
                        }}
                    >
                        <MailingList />
                    </Flex>
                    <YearlingsBobtailUpsell />
                </StyledFrameBody>
            </StyledFrame>
        </CSSTransition>
    )
}

export default MainFooter
