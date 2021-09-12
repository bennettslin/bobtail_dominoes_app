import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Helmet as ReactHelmet } from 'react-helmet'
import { mapSelectedPagePath } from '../../redux/page/selector'
import {
    getMetaTitle,
    getMetaTags,
} from './helper'

const Helmet = ({ description, title }) => {
    const selectedPagePath = useSelector(mapSelectedPagePath)

    return (
        <ReactHelmet>
            <title>
                {getMetaTitle({
                    page: selectedPagePath,
                    title,
                })}
            </title>
            {getMetaTags({
                page: selectedPagePath,
                description,
                title,
            }).map(({
                name,
                property,
                content,
            }) => (
                <meta
                    {...{
                        key: name || property,
                        ...name && { name },
                        ...property && { property },
                        content,
                    }}
                />
            ))}
        </ReactHelmet>
    )
}

Helmet.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
}

export default Helmet
