import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useDispatch } from 'react-redux'
import { updateSelectedPage } from '../../redux/page/action'
import { getPathForPage } from '../../constants/pages'
import { getInternalLink } from './helper'

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
        internalLink = getInternalLink({
            href,
            pageLink,
        }),
        Tag = internalLink ? Link : 'a'

    const onClick = () => {
        if (internalLink) {
            dispatch(updateSelectedPage(internalLink))
        }

        if (analyticsLabel || internalLink) {
            logEvent(
                'Anchor',
                analyticsLabel || internalLink,
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
                ...internalLink && {
                    to: getPathForPage(internalLink),
                },
                ...!internalLink && href && {
                    href,
                    // Open in new tab only if it's not an internal page link.
                    ...href[0] !== '#' && {
                        target: '_blank',
                    },
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
