import React from 'react'
import cx from 'classnames'
import FollowButton from '..'
import Svg from '../../../Svg'
import facebook from '../../../../assets/svgs/facebook.svg'
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
                    src: facebook,
                }}
            />
        </FollowButton>
    )
}

export default FacebookButton
