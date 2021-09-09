import React from 'react'
import PropTypes from 'prop-types'
import Anchor from '../../../../components/Anchor'
import { getCapitalizedText } from '../../../../utils/format'

const RootPageLink = ({ rootPage }) => (
    <Anchor {...{ pageLink: rootPage }} >
            Back to {getCapitalizedText(rootPage)}
    </Anchor>
)

RootPageLink.propTypes = {
    rootPage: PropTypes.string.isRequired,
}

export default RootPageLink
