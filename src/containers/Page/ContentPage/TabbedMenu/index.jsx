import React, { useContext } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PageConfigContext from '../../../../contexts/PageConfig'
import StyledTabbedMenu from '../../../../components/Styled/TabbedMenu'
import BackLink from '../BackLink'
import TabbedMenuButton from './Button'
import { getMapShowBackLink, mapShowTabbedMenu } from '../../../../redux/page/selector'
import { getCapitalizedText } from '../../../../utils/format'

const TabbedMenu = () => {
    const
        { pages, topLevelPage } = useContext(PageConfigContext),
        showTabbedMenu = useSelector(mapShowTabbedMenu),
        showBackLink = useSelector(getMapShowBackLink(topLevelPage))

    return showTabbedMenu && (
        <StyledTabbedMenu
            {...{
                className: cx(
                    'TabbedMenu',
                ),
            }}
        >
            {showBackLink && (
                <BackLink isStyledShadow />
            )}
            {Boolean(pages) && pages.map(({ id, date }, index) => (
                <TabbedMenuButton
                    {...{
                        key: index,
                        id,
                        date,
                        topLevelPage,
                    }}
                >
                    {getCapitalizedText(id)}
                </TabbedMenuButton>
            ))}
        </StyledTabbedMenu>
    )
}

export default TabbedMenu
