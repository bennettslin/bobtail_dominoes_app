import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../Flex'
import HandDomino from './Domino'

const Hand = ({ hand, isThumbnail }) => Boolean(hand) && (
    <Flex {...{ gap: 'xs' }} >
        {Array.from(hand).map(dominoIndex => (
            <HandDomino
                {...{
                    key: dominoIndex,
                    dominoIndex,
                    isThumbnail,
                }}
            />
        ))}
    </Flex>
)

Hand.propTypes = {
    hand: PropTypes.object,
    isThumbnail: PropTypes.bool,
}

export default Hand
