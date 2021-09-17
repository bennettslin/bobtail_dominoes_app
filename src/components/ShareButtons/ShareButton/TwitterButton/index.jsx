import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ShareButton from '..'
import Svg from '../../../Svg'
import twitter from '../../../../assets/svgs/socialMedia/twitter'
import { mapSelectedPagePath } from '../../../../redux/page/selector'
import { openSocialMediaPopup } from '../../../../utils/socialMedia'
import { TWITTER_KEY } from '../../../../constants/socialMedia'

const TwitterButton = () => {
    const selectedPagePath = useSelector(mapSelectedPagePath)

    const handleButtonClick = () => {
        openSocialMediaPopup({
            page: selectedPagePath,
            brandId: TWITTER_KEY,
            socialMediaKey: 'share',
        })
    }

    return (
        <ShareButton
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
        </ShareButton>
    )
}

export default TwitterButton
