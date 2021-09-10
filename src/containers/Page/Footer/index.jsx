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
    nextPage,
    previousPage,
    rootPage,
}) => (
    <div
        {...{
            className: cx(
                'PageFooter',
            ),
        }}
    >
        <PageFooterRow
            {...{
                leftChild: rootPage && previousPage && (
                    <DirectionPageLink
                        isPrevious
                        {...{
                            rootPage,
                            ...previousPage,
                        }}
                    />
                ),
                rightChild: rootPage && nextPage && (
                    <DirectionPageLink
                        isNext
                        {...{
                            rootPage,
                            ...nextPage,
                        }}
                    />
                ),
            }}
        />
        <PageFooterRow
            hasBorderTop
            {...{
                leftChild: rootPage && (
                    <RootPageLink {...{ rootPage }} />
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
    nextPage: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.shape({
            year: PropTypes.number.isRequired,
            month: PropTypes.number.isRequired,
            day: PropTypes.number.isRequired,
        }),
    }),
    previousPage: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.shape({
            year: PropTypes.number.isRequired,
            month: PropTypes.number.isRequired,
            day: PropTypes.number.isRequired,
        }),
    }),
    rootPage: PropTypes.string,
}

export default PageFooter
