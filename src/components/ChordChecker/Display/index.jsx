import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import { getChordLabel } from '../../../utils/chords/label'
import { getIsChord } from '../../../utils/chords/valid'
import './style'

const CheckerDisplay = ({ currentPitchSet }) => {
    return (
        <Flex
            {...{
                className: cx(
                    'CheckerDisplay',
                ),
            }}
        >
            {getChordLabel(currentPitchSet)}
            {getIsChord(currentPitchSet) ? 'valid' : 'invalid'}
        </Flex>
    )
}

CheckerDisplay.propTypes = {
    currentPitchSet: PropTypes.object.isRequired,
}

export default CheckerDisplay
