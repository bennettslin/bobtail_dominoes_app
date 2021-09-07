import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useDispatch } from 'react-redux'
import { updateSelectedPage } from '../../redux/page/action'
import { getPathForPage } from '../../constants/pages'

const Anchor = ({
    className,
    analyticsLabel,
    href,
    pageLink,
    handleAnchorClick = () => {},
    children,

}) => {
    const
        dispatch = useDispatch(),
        Tag = pageLink ? Link : 'a'

    const onClick = () => {
        if (pageLink) {
            dispatch(updateSelectedPage(pageLink))
        }

        if (analyticsLabel || pageLink) {
            logEvent(
                'Anchor',
                analyticsLabel || pageLink,
            )
        }

        handleAnchorClick()
    }

    return (
        <Tag
            {...{
                className: cx(
                    'Anchor',
                    className,
                ),
                ...href && {
                    href,
                    // Open in new tab only if it's not an internal page link.
                    ...href[0] !== '#' && {
                        target: '_blank',
                    },
                },
                ...pageLink && {
                    to: getPathForPage(pageLink),
                },
                onClick,
            }}
        >
            {children}
        </Tag>
    )
}

Anchor.propTypes = {
    className: PropTypes.string,
    analyticsLabel: PropTypes.string,
    href: PropTypes.string,
    pageLink: PropTypes.string,
    handleAnchorClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Anchor
