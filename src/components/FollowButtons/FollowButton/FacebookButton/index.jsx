import React from 'react'
import cx from 'classnames'
import Svg from '../../../Svg'
import FollowButton from '..'
import facebookLike from '../../../../assets/svgs/socialMedia/facebookLike'
import { openSocialMediaPopup } from '../../../../utils/socialMedia'
import { FACEBOOK_KEY } from '../../../../constants/socialMedia'

const FacebookButton = () => {
    const handleButtonClick = () => {
        openSocialMediaPopup({
            brandId: FACEBOOK_KEY,
            socialMediaKey: 'follow',
        })
    }

    return (
        <FollowButton
            {...{
                className: cx(
                    'FacebookButton',
                ),
                id: FACEBOOK_KEY,
                handleButtonClick,
            }}
        >
            <Svg
                {...{
                    src: facebookLike,
                }}
            />
        </FollowButton>
    )
}

export default FacebookButton
