import React, { useContext } from 'react'
import PageConfigContext from '../../../../../contexts/PageConfig'
import PageFooterRow from '../FooterRow'
import DirectionPageLink from './DirectionPageLink'
import { getTimeEligiblePage } from '../../../../../utils/date/current/pages'

const DirectionRow = () => {
    const
        {
            directionLeftPage,
            directionRightPage,
        } = useContext(PageConfigContext),

        timeEligibleLeftPage = getTimeEligiblePage(directionLeftPage),
        timeEligibleRightPage = getTimeEligiblePage(directionRightPage)

    return (timeEligibleLeftPage || timeEligibleRightPage) && (
        <PageFooterRow
            {...{
                leftChild: (
                    <DirectionPageLink
                        {...{
                            direction: -1,
                            directionPage: timeEligibleLeftPage,
                        }}
                    />
                ),
                rightChild: (
                    <DirectionPageLink
                        {...{
                            direction: 1,
                            directionPage: timeEligibleRightPage,
                        }}
                    />
                ),
            }}
        />
    )
}

export default DirectionRow
