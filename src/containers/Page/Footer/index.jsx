import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ShareButtons from '../../../components/ShareButtons'
import PageFooterRow from './Row'
import DirectionPageLink from './DirectionPageLink'
import RootPageLink from './RootPageLink'
import './style'

const PageFooter = ({
    noShare,
    rootPage,
    pages,
}) => (
    <div
        {...{
            className: cx(
                'PageFooter',
            ),
        }}
    >
        {pages && (
            <PageFooterRow
                {...{
                    leftChild: (
                        <DirectionPageLink
                            isPrevious
                            {...{
                                direction: -1,
                                rootPage,
                                pages,
                            }}
                        />
                    ),
                    rightChild: (
                        <DirectionPageLink
                            isNext
                            {...{
                                direction: 1,
                                rootPage,
                                pages,
                            }}
                        />
                    ),
                }}
            />
        )}
        <PageFooterRow
            hasBorderTop
            {...{
                leftChild: (
                    <RootPageLink />
                ),
                rightChild: !noShare && (
                    <ShareButtons />
                ),
            }}
        />
    </div>
)

PageFooter.propTypes = {
    noShare: PropTypes.bool,
    rootPage: PropTypes.string,
    pages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })),
}

export default PageFooter
