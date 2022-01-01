import React from 'react'
import cx from 'classnames'
import Flex from '../Flex'
import puzzles from '../../content/puzzles'
import { getNumberKeysFromMap } from '../../utils/general/keyMap'
import { datePropTypes } from '../../constants/propTypes'

const PuzzleMonthLinks = ({ date: { year } }) => {
    console.log('getListfrom', getNumberKeysFromMap(puzzles[year]))

    return null
    // return (
    //     <Flex
    //         {...{
    //             className: cx(
    //                 'PuzzleMonthLinks',
    //                 'fontSize__md',
    //             ),
    //             flexDirection: 'column',
    //             alignItems: 'start',
    //             gap: 'md',
    //         }}
    //     >
    //         <Flex
    //             {...{
    //                 justifyContent: 'normal',
    //                 flexWrap: 'wrap',
    //                 gap: 'xs',
    //             }}
    //         >
    //             {getValueListFromMap(puzzles[year]).reverse().map(
    //                 (pageMaps, index) => (
    //                     <PuzzleLink
    //                         {...{
    //                             key: index,
    //                             ...pageMaps,
    //                         }}
    //                     />
    //                 ),
    //             )}
    //         </Flex>
    //     </Flex>
    // )
}

PuzzleMonthLinks.propTypes = {
    date: datePropTypes,
}

export default PuzzleMonthLinks
