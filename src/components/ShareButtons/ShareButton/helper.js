import { getUrlForPage } from '../../../constants/pages'
import {
    FACEBOOK_ID,
    TWITTER_ID,
} from '../../../constants/socialMedia'
import { APP_NAME } from '../../../utils/server'

const
    SOCIAL_MEDIA_URL_MAP = {
        [FACEBOOK_ID]:
        `https://www.facebook.com/sharer/sharer.php?u=`,
        [TWITTER_ID]:
        `https://twitter.com/intent/tweet?url=`,
    },
    POPUP_HEIGHT = 456,
    POPUP_WIDTH = 568,
    BASE_WINDOW_FEATURES = {
        height: POPUP_HEIGHT,
        width: POPUP_WIDTH,
        scrollbars: 'yes',
    }

const getSocialMediaUrl = (brandId, url) => (
    `${SOCIAL_MEDIA_URL_MAP[brandId]}${url}`
)

const getWindowFeatures = features => (
    Object.keys(features).map(key => (
        `${key}=${features[key]}`
    )).join(',')
)

export const openSocialMediaPopup = ({
    page,
    brandId,

}) => {
    window.open(
        getSocialMediaUrl(brandId, getUrlForPage(page)),
        `${APP_NAME}_socialMedia`,
        getWindowFeatures({
            ...BASE_WINDOW_FEATURES,

            // Centre the window popup.
            top:
                window.top.outerHeight / 2
                + window.top.screenY
                - POPUP_HEIGHT / 2,
            left:
                window.top.outerWidth / 2
                + window.top.screenX
                - POPUP_WIDTH / 2,
        }),
    )
}
