import React, { useContext } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../../../contexts/PageConfig'
import Anchor from '../../../../../../components/Anchor'
import { getMapShowBackLink } from '../../../../../../redux/page/selector'
import { getCapitalizedText } from '../../../../../../utils/format'
import './style'

const BackLink = () => {
    const
        { topLevelPage } = useContext(PageConfigContext),
        showBackLink = useSelector(getMapShowBackLink(topLevelPage))

    return showBackLink && (
        <Anchor
            {...{
                className: cx(
                    'BackLink',
                ),
                pagePath: topLevelPage,
            }}
        >
                Back to {getCapitalizedText(topLevelPage)}
        </Anchor>
    )
}

export default BackLink
