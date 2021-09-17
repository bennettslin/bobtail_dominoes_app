import React from 'react'
import cx from 'classnames'
import FollowButton from '..'
import Svg from '../../../Svg'
import twitter from '../../../../assets/svgs/socialMedia/twitter'
import { openSocialMediaPopup } from '../../../../utils/socialMedia'
import { TWITTER_KEY } from '../../../../constants/socialMedia'

const TwitterButton = () => {
    const handleButtonClick = () => {
        openSocialMediaPopup({
            brandId: TWITTER_KEY,
            socialMediaKey: 'follow',
        })
    }

    return (
        <FollowButton
            {...{
                className: cx(
                    'TwitterButton',
                ),
                id: TWITTER_KEY,
                handleButtonClick,
            }}
        >
            <Svg
                {...{
                    src: twitter,
                }}
            />
        </FollowButton>
    )
}

export default TwitterButton
