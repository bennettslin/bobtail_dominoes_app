import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PageMenuButton from './MenuButton'
import './style'

const PageMenu = ({ pages, rootPage }) => (
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
                <PageMenuButton {...{ key: id, pageLink: id, rootPage }}>
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
    rootPage: PropTypes.string,
}

export default PageMenu
