import React, { useContext } from 'react'
import PageConfigContext from '../../../../../contexts/PageConfig'
import PageFooterRow from '../FooterRow'
import DirectionPageLink from './DirectionPageLink'

const DirectionRow = () => {
    const
        {
            directionLeftPage,
            directionRightPage,
        } = useContext(PageConfigContext)

    if (!directionLeftPage && !directionRightPage) {
        return null
    }

    return (
        <PageFooterRow
            {...{
                leftChild: (
                    <DirectionPageLink
                        {...{
                            direction: -1,
                            directionPage: directionLeftPage,
                        }}
                    />
                ),
                rightChild: (
                    <DirectionPageLink
                        {...{
                            direction: 1,
                            directionPage: directionRightPage,
                        }}
                    />
                ),
            }}
        />
    )
}

export default DirectionRow
