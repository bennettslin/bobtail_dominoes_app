import React from 'react'
import { useSelector } from 'react-redux'
import Anchor from '../../../../components/Anchor'
import { mapSelectedPage } from '../../../../redux/page/selector'
import { getCapitalizedText } from '../../../../utils/format'
import { getIsTabbedPage, getRootPageFromPath } from '../../../../constants/pages'

const RootPageLink = () => {
    const
        selectedPage = useSelector(mapSelectedPage),
        rootPage = getRootPageFromPath(selectedPage)

    return (
        rootPage !== selectedPage &&
        !getIsTabbedPage(selectedPage)
    ) && (
        <Anchor {...{ pageLink: rootPage }} >
                Back to {getCapitalizedText(rootPage)}
        </Anchor>
    )
}

export default RootPageLink
