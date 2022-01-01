import React, { useContext } from 'react'
import PageConfigContext from '../../../../../contexts/PageConfig'
import PageFooterRow from '../FooterRow'
import DirectionPageLink from './DirectionPageLink'
import { getPastOrPresentPage } from '../../../../../utils/date/current'

const DirectionRow = () => {
    const
        {
            directionLeftPage,
            directionRightPage,
        } = useContext(PageConfigContext),

        eligibleLeftPage = getPastOrPresentPage(directionLeftPage),
        eligibleRightPage = getPastOrPresentPage(directionRightPage)

    return (eligibleLeftPage || eligibleRightPage) && (
        <PageFooterRow
            {...{
                leftChild: (
                    <DirectionPageLink
                        {...{
                            direction: -1,
                            directionPage: eligibleLeftPage,
                        }}
                    />
                ),
                rightChild: (
                    <DirectionPageLink
                        {...{
                            direction: 1,
                            directionPage: eligibleRightPage,
                        }}
                    />
                ),
            }}
        />
    )
}

export default DirectionRow
