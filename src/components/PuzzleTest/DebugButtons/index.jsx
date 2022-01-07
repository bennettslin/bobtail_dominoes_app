import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import PuzzleTestButton from '../Button'
import { getArrayOfIndices } from '../../../utils/general'

const PuzzleTestDebugButtons = ({ setPuzzle }) => (
    <Flex
        {...{
            className: cx(
                'PuzzleTest__debugButtons',
            ),
            justifyContent: 'spaceEvenly',
            gap: 'xs',
        }}
    >
        for debugging only:
        {getArrayOfIndices(7).map(customIndex => (
            <PuzzleTestButton
                {...{
                    key: customIndex,
                    customIndex,
                    setPuzzle,
                }}
            />
        ))}
    </Flex>
)

PuzzleTestDebugButtons.propTypes = {
    setPuzzle: PropTypes.func.isRequired,
}

export default PuzzleTestDebugButtons
