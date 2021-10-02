import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../../contexts/PageConfig'
import PageFooterRow from '../FooterRow'
import BackLink from './BackLink'
import ShareButtons from '../../../../../components/ShareButtons'
import { getMapShowBackLink } from '../../../../../redux/page/selector'

const BackLinkShareRow = () => {
    const
        { noShare, topLevelPage } = useContext(PageConfigContext),
        showBackLink = useSelector(getMapShowBackLink(topLevelPage))

    if (!showBackLink && noShare) {
        return null
    }

    return (
        <PageFooterRow
            isBottomRow
            {...{
                leftChild: showBackLink && (
                    <BackLink />
                ),
                rightChild: !noShare && (
                    <ShareButtons />
                ),
            }}
        />
    )
}

export default BackLinkShareRow
