import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import MultiPagesBackLink from './BackLink'
import ShareButtons from '../ShareButtons'
import './style'

const MultiPageFooter = ({ backPage }) => (
    <div
        {...{
            className: cx(
                'MultiPageFooter',
            ),
        }}
    >
        <MultiPagesBackLink {...{ backPage }} />
        <ShareButtons />
    </div>
)

MultiPageFooter.propTypes = {
    backPage: PropTypes.string.isRequired,
}

export default MultiPageFooter
