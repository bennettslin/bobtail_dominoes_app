import React, { useContext } from 'react'
import cx from 'classnames'
import PageConfigContext from '../../../contexts/PageConfig'
import ShareButtons from '../../../components/ShareButtons'
import PageFooterRow from './Row'
import DirectionPageLink from './DirectionPageLink'
import RootPageLink from './RootPageLink'
import './style'

const PageFooter = () => {
    const { pages, noShare } = useContext(PageConfigContext)

    return (
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
                            <DirectionPageLink {...{ direction: -1 }} />
                        ),
                        rightChild: (
                            <DirectionPageLink {...{ direction: 1 }} />
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
}

export default PageFooter
