import { GA_ACCOUNT } from './src/constants/analytics'
import { getFaviconFileName } from './src/utils/server'

export default {
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    GA_ACCOUNT,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Bobtail Dominoes`,
                short_name: `Bobtail Dominoes`,
                description: 'Website for the musical tile game Bobtail Dominoes',
                start_url: '/',
                background_color: '#634680',
                theme_color: '#ead9cc',
                display: 'standalone',
                icon: `src/assets/favicon/${getFaviconFileName()}.png`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: 'bobtaildominoes--production',
            },
        },
    ],
}
