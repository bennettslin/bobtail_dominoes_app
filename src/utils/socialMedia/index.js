import qs from 'qs'
import { getUrlFromPath } from '../pages/path'
import {
    FACEBOOK_ACCOUNT,
    FACEBOOK_KEY,
    TWITTER_ACCOUNT,
    TWITTER_KEY,
} from '../../constants/socialMedia'
import { APP_NAME } from '../server'

const getSocialMediaUrl = ({ brandUrl, queryStrings }) => (
    `${brandUrl}${qs.stringify(queryStrings, { addQueryPrefix: true })}`
)

const
    SOCIAL_MEDIA_URL_MAP = {
        share: {
            [FACEBOOK_KEY]: url => getSocialMediaUrl({
                brandUrl: 'https://www.facebook.com/sharer/sharer.php',
                queryStrings: {
                    u: url,
                },
            }),
            [TWITTER_KEY]: url => getSocialMediaUrl({
                brandUrl: 'https://twitter.com/intent/tweet',
                queryStrings: {
                    url,
                },
            }),
        },
        follow: {
            [FACEBOOK_KEY]: () => getSocialMediaUrl({
                brandUrl: 'https://www.facebook.com/v11.0/plugins/error/confirm/like',
                queryStrings: {
                    plugin: 'like',
                    return_params: JSON.stringify({
                        href: `https://www.facebook.com/${FACEBOOK_ACCOUNT}`,
                    }),
                },
            }),
            [TWITTER_KEY]: () => getSocialMediaUrl({
                brandUrl: 'https://twitter.com/intent/follow',
                queryStrings: {
                    screen_name: TWITTER_ACCOUNT,
                },
            }),
        },
    },
    POPUP_HEIGHT = 420,
    POPUP_WIDTH = 560,
    BASE_WINDOW_FEATURES = {
        height: POPUP_HEIGHT,
        width: POPUP_WIDTH,
        scrollbars: 'yes',
    }

const getWindowFeatures = features => (
    Object.keys(features).map(key => (
        features[key] === true ? key : `${key}=${features[key]}`
    )).join(',')
)

export const openSocialMediaPopup = ({
    page,
    brandId,
    socialMediaKey,

}) => {
    const popupWindow = window.open(
        SOCIAL_MEDIA_URL_MAP[socialMediaKey][brandId](getUrlFromPath(page)),
        `${APP_NAME}_${socialMediaKey}`,
        getWindowFeatures({
            ...BASE_WINDOW_FEATURES,

            // Centre the window popup.
            top:
                window.top.outerHeight / 3
                + window.top.screenY
                - POPUP_HEIGHT / 2,
            left:
                window.top.outerWidth / 2
                + window.top.screenX
                - POPUP_WIDTH / 2,
        }),
    )

    /**
     * Prevent plugins from hijacking the referrer window. This has to be set
     * after the popup window is opened. Otherwise, it loses knowledge of the
     * parent window and cannot position itself properly.
     */
    popupWindow.opener = null
}
