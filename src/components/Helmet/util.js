import { getTruncatedText } from '../../utils/format'
import { getUrlForPath } from '../../utils/pages/path/url'
import { HOME_PAGE } from '../../constants/pages'
import { TWITTER_ACCOUNT } from '../../constants/socialMedia'
import {
    APP_DESCRIPTION,
    APP_NAME,
    APP_TITLE,
} from '../../utils/server'

const capitalise = str => (
    str[0].toUpperCase() + str.substring(1)
)

export const getMetaTitle = ({
    page,
    title,
}) => {
    if (title) {
        return title

    } else if (page === HOME_PAGE) {
        return APP_TITLE

    } else {
        return `${capitalise(page)} | ${APP_TITLE}`
    }
}

export const getMetaDescription = description => (
    description ?
        getTruncatedText(description) :
        APP_DESCRIPTION
)

const getDefaultConfig = description => ({
    description: getMetaDescription(description),
})

const getFacebookConfig = ({
    page,
    description,
    title,
}) => ({
    'og:url': getUrlForPath(page),
    'og:type': 'website',
    'og:title': getMetaTitle({
        page,
        title,
    }),
    'og:description': getMetaDescription(description),
    'og:image': getUrlForPath(`share/image/facebook/${APP_NAME}.png`),
})

const getTwitterConfig = ({
    page,
    description,
    title,
}) => ({
    'twitter:card': 'summary',
    'twitter:site': `@${TWITTER_ACCOUNT}`,
    'twitter:title': getMetaTitle({
        page,
        title,
    }),
    'twitter:description': getMetaDescription(description),
    'twitter:image':
        getUrlForPath(`share/image/twitter/${APP_NAME}.png`),
})

const spreadHelmetConfig = ({ config, nameKey }) => (
    Object.keys(config).map(key => ({
        [nameKey]: key,
        content: config[key],
    }))
)

export const getMetaTags = ({
    page,
    description,
    title,
}) => ([
    ...spreadHelmetConfig({
        config: {
            ...getDefaultConfig(description),
            ...getTwitterConfig({
                page,
                description,
                title,
            }),
        },
        nameKey: 'name',
    }),
    ...spreadHelmetConfig({
        config: getFacebookConfig({
            page,
            description,
            title,
        }),
        nameKey: 'property',
    }),
])
