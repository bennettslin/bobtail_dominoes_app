import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Heading from '../../../components/Heading'
import { replaceStraightWithSmartQuotes } from '../../../utils/format/smartQuote'
import './style'

const Body = ({ title, children }) => (
    <div
        {...{
            className: cx(
                'Body',
            ),
        }}
    >
        {title && (
            <Heading isBodyHeading>
                {replaceStraightWithSmartQuotes(title)}
            </Heading>
        )}
        {children}
    </div>
)

Body.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Body
