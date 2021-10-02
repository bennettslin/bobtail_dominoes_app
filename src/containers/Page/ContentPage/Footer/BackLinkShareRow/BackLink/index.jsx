import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../../../contexts/PageConfig'
import Anchor from '../../../../../../components/Anchor'
import { getMapShowBackLink } from '../../../../../../redux/page/selector'
import { getCapitalizedText } from '../../../../../../utils/format'

const BackLink = () => {
    const
        { topLevelPage } = useContext(PageConfigContext),
        showBackLink = useSelector(getMapShowBackLink(topLevelPage))

    return showBackLink && (
        <Anchor {...{ pagePath: topLevelPage }} >
                Back to {getCapitalizedText(topLevelPage)}
        </Anchor>
    )
}

export default BackLink
