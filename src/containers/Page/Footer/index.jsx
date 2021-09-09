import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import MultiPagesBackLink from './BackLink'
import ShareButtons from '../../../components/ShareButtons'
import './style'

const PageFooter = ({ backPage }) => (
    <div
        {...{
            className: cx(
                'PageFooter',
            ),
        }}
    >
        <MultiPagesBackLink {...{ backPage }} />
        <ShareButtons />
    </div>
)

PageFooter.propTypes = {
    backPage: PropTypes.string.isRequired,
}

export default PageFooter
