import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Paragraph from '../../Paragraph'
import Anchor from '../../Anchor'
import { mapSelectedPage } from '../../../redux/page/selector'
import { getCapitalizedText } from '../../../utils/format'

const MultiPagesBackLink = ({ backPage }) => {
    const selectedPage = useSelector(mapSelectedPage)

    return (
        <Paragraph
            {...{
                className: 'MultiPagesBackLink',
            }}
        >
            <Anchor
                {...{
                    pageLink: backPage,
                    analyticsLabel: `MultiPagesBackLink__${selectedPage}`,
                }}
            >
                Back to {getCapitalizedText(backPage)}
            </Anchor>
        </Paragraph>
    )
}

MultiPagesBackLink.propTypes = {
    backPage: PropTypes.string.isRequired,
}

export default MultiPagesBackLink
