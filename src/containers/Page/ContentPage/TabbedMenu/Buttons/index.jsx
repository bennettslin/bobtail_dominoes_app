import React, { useContext } from 'react'
import PageConfigContext from '../../../../../contexts/PageConfig'
import TabbedMenuButton from '../Button'
import { getTimeEligiblePage } from '../../../../../utils/date/current'
import { getFormattedPageLink } from '../../../../../utils/pages/format'

const TabbedMenuButtons = () => {
    const
        { pages = [], topLevelPage } = useContext(PageConfigContext),
        timeEligiblePages = pages.filter(page => (
            getTimeEligiblePage(page)
        ))

    return Boolean(timeEligiblePages.length) && (
        <>
            {timeEligiblePages.map(({ id, date, isEllipsis }, index) => (
                <TabbedMenuButton
                    {...{
                        key: index,
                        id,
                        date,
                        topLevelPage,
                        isEllipsis,
                    }}
                >
                    {getFormattedPageLink({ id, date })}
                </TabbedMenuButton>
            ))}
        </>
    )
}

export default TabbedMenuButtons
