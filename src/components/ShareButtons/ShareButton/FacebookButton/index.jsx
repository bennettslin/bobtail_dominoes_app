import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Svg from '../../../Svg'
import ShareButton from '..'
import facebook from '../../../../assets/svgs/socialMedia/facebook'
import { mapSelectedPagePath } from '../../../../redux/page/selector'
import { openSocialMediaPopup } from '../../../../utils/socialMedia'
import { FACEBOOK_KEY } from '../../../../constants/socialMedia'

const FacebookButton = () => {
    const selectedPagePath = useSelector(mapSelectedPagePath)

    const handleButtonClick = () => {
        openSocialMediaPopup({
            page: selectedPagePath,
            brandId: FACEBOOK_KEY,
            socialMediaKey: 'share',
        })
    }

    return (
        <ShareButton
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
                    className: 'facebook',
                    src: facebook,
                }}
            />
        </ShareButton>
    )
}

export default FacebookButton
