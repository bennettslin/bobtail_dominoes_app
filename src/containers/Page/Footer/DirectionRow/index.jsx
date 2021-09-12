import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../contexts/PageConfig'
import PageFooterRow from '../FooterRow'
import DirectionPageLink from './DirectionPageLink'
import { mapSelectedPagePath } from '../../../../redux/page/selector'
import { getDirectionPage } from './helper'

const DirectionRow = () => {
    const
        { pages } = useContext(PageConfigContext),
        selectedPagePath = useSelector(mapSelectedPagePath),
        directionPageLeft = getDirectionPage({
            direction: -1,
            pages,
            selectedPagePath,
        }),
        directionPageRight = getDirectionPage({
            direction: 1,
            pages,
            selectedPagePath,
        })

    if (!directionPageLeft && !directionPageRight) {
        return null
    }

    return (
        <PageFooterRow
            {...{
                leftChild: (
                    <DirectionPageLink
                        {...{
                            direction: -1,
                            directionPage: directionPageLeft,
                        }}
                    />
                ),
                rightChild: (
                    <DirectionPageLink
                        {...{
                            direction: 1,
                            directionPage: directionPageRight,
                        }}
                    />
                ),
            }}
        />
    )
}

export default DirectionRow
