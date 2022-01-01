import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../../contexts/PageConfig'
import ShareButtons from '../../../../../components/ShareButtons'
import BackLink from '../../BackLink'
import PageFooterRow from '../FooterRow'
import { mapShowTabbedMenuBackLink } from '../../../../../redux/page/selector'

const TopLevelShareRow = () => {
    const
        { noShare } = useContext(PageConfigContext),
        showBackLink = useSelector(mapShowTabbedMenuBackLink)

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

export default TopLevelShareRow
