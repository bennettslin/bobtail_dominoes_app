import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../Flex'
import HandDomino from './Domino'

const Hand = ({ hand }) => Boolean(hand) && (
    <Flex {...{ gap: 'xs' }} >
        {Array.from(hand).map(dominoIndex => (
            <HandDomino
                {...{
                    key: dominoIndex,
                    dominoIndex,
                }}
            />
        ))}
    </Flex>
)

Hand.propTypes = {
    hand: PropTypes.object,
}

export default Hand
