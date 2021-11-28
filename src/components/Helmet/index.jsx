import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Helmet as ReactHelmet } from 'react-helmet'
import PageConfigContext from '../../contexts/PageConfig'
import { mapSelectedPagePath } from '../../redux/page/selector'
import { getCapitalizedText } from '../../utils/format'
import {
    getMetaTitle,
    getMetaTags,
} from './util'

const Helmet = () => {
    const
        {
            id,
            title,
            description,
        } = useContext(PageConfigContext),
        selectedPagePath = useSelector(mapSelectedPagePath)

    return (
        <ReactHelmet>
            <title>
                {getMetaTitle({
                    page: selectedPagePath,
                    title: title || getCapitalizedText(id),
                })}
            </title>
            {getMetaTags({
                page: selectedPagePath,
                description,
                title: getCapitalizedText(id),
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
