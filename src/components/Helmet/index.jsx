import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Helmet as ReactHelmet } from 'react-helmet'
import PageConfigContext from '../../contexts/PageConfig'
import { mapSelectedPagePath } from '../../redux/page/selector'
import { getHelmetTitle } from '../../utils/pages/format'
import {
    getMetaTitle,
    getMetaTags,
} from './util'

const Helmet = () => {
    const
        {
            id,
            date,
            topLevelPage,
        } = useContext(PageConfigContext),
        selectedPagePath = useSelector(mapSelectedPagePath),
        title = getHelmetTitle({
            id,
            date,
            topLevelPage,
        })

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

export default Helmet
