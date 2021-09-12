import React from 'react'
import { useSelector } from 'react-redux'
import Anchor from '../../../../../components/Anchor'
import { mapSelectedPagePath } from '../../../../../redux/page/selector'
import { getCapitalizedText } from '../../../../../utils/format'
import { getIsTabbedPath, getTopLevelPageFromPath } from '../../../../../utils/pages/path'

const TopLevelPageLink = () => {
    const
        selectedPagePath = useSelector(mapSelectedPagePath),
        topLevelPage = getTopLevelPageFromPath(selectedPagePath)

    return (
        topLevelPage !== selectedPagePath &&
        !getIsTabbedPath(selectedPagePath)
    ) && (
        <Anchor {...{ pagePath: topLevelPage }} >
                Back to {getCapitalizedText(topLevelPage)}
        </Anchor>
    )
}

export default TopLevelPageLink
