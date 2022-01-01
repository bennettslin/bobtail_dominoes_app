import React, { useContext } from 'react'
import PageConfigContext from '../../../../../contexts/PageConfig'
import TabbedMenuButton from '../Button'
import { getPastOrPresentPage } from '../../../../../utils/date/current'
import { getFormattedPageLink } from '../../../../../utils/pages/format'

const TabbedMenuButtons = () => {
    const { pages = [], topLevelPage } = useContext(PageConfigContext)

    const eligiblePages = pages.filter(page => (
        getPastOrPresentPage(page)
    ))

    return Boolean(eligiblePages.length) && (
        <>
            {eligiblePages.map(({ id, date }, index) => (
                <TabbedMenuButton
                    {...{
                        key: index,
                        id,
                        date,
                        topLevelPage,
                    }}
                >
                    {getFormattedPageLink({ id, date })}
                </TabbedMenuButton>
            ))}
        </>
    )
}

export default TabbedMenuButtons
