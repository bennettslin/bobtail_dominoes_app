import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PageMenuButton from './MenuButton'
import './style'

const PageMenu = ({ pages, topLevelPage }) => (
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

PageMenu.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })),
    topLevelPage: PropTypes.string,
}

export default PageMenu
