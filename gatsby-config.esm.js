import { GA_ACCOUNT } from './src/constants/analytics'
import {
    getFaviconFileName,
    getS3BucketName,
} from './src/utils/server'

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
                description: 'Website for the musical tile game Bobtail Dominoes.',
                start_url: '/',
                background_color: '#7d9bb8',
                theme_color: '#8c7363',
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
                bucketName: getS3BucketName(),
            },
        },
    ],
}
