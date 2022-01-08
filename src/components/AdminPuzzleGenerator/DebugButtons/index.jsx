import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import PuzzleTestButton from '../Button'
import { getArrayOfIndices } from '../../../utils/general'

const AdminPuzzleDebugButtons = ({ setPuzzle }) => (
    <Flex
        {...{
            className: cx(
                'AdminPuzzleDebugButtons',
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

AdminPuzzleDebugButtons.propTypes = {
    setPuzzle: PropTypes.func.isRequired,
}

export default AdminPuzzleDebugButtons
