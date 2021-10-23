export const getAllRowsFromPlacement = ({ dominoIndex, placement, board }) => {
    //             * Return all rows formed from placement
    //             * (dominoIndex, placement, board) => [
    //                 pitchSet,
    //                 pitchSet,
    //                 pitchSet
    //             ]
}

export const getPointsFromPlacement = ({ dominoIndex, placement, board }) => {
    //         * Return points from placement
    //         * (dominoIndex, placement, board) => true or false
    //         * Return value
    //             * If -1, invalid sonorities
    //             * If 0, no invalid sonorities but also no valid chords
    //             * If greater than 0, valid chords
}

export const getAllPossiblePlacements = ({ dominoIndex, board }) => {
    //     * Return all possible placements
    //         * (dominoIndex, board) => [
    //             [[0, 0], [1, 0]],
    //         ]
}

export const getAllValidPlacements = ({ dominoIndex, board }) => {
    // Placement is [[xCoord, yCoord], [xCoord, yCoord]], lower pitch first.
}
