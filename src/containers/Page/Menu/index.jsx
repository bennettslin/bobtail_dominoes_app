import React, { useContext } from 'react'
import cx from 'classnames'
import PageConfigContext from '../../../contexts/PageConfig'
import PageMenuButton from './MenuButton'
import './style'

const PageMenu = () => {
    const { pages, topLevelPage } = useContext(PageConfigContext)

    return (
        Boolean(pages) && (
            <div
                {...{
                    className: cx(
                        'PageMenu',
                    ),
                }}
            >
                {pages.map(({
                    id,
                    title,
                }) => (
                    <PageMenuButton {...{ key: id, pagePath: id, topLevelPage }}>
                        {title}
                    </PageMenuButton>
                ))}
            </div>
        )
    )
}

export default PageMenu
