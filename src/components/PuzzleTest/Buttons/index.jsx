import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../Flex'
import PuzzleTestButton from '../Button'
import { PUZZLE_OF_DAY_CONFIGS } from '../constants'

const PuzzleTestButtons = ({ setPuzzle }) => (
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
        {PUZZLE_OF_DAY_CONFIGS.map((config, index) => (
            <PuzzleTestButton
                {...{
                    key: index,
                    setPuzzle,
                    ...config,
                }}
            />
        ))}
    </Flex>
)

PuzzleTestButtons.propTypes = {
    setPuzzle: PropTypes.func.isRequired,
}

export default PuzzleTestButtons
