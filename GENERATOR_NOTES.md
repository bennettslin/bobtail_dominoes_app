# Generator notes
* getAllValidPlacements
    * Placement is pair of two coordinates, first is lower pitch, second is higher pitch.
    * Return all valid placements
    * (dominoIndex, board) => [
        {
            placement: [0, 0],
            points: 3
        }
    ]
    * getAllPossiblePlacements
    * Return all possible placements
        * (dominoIndex, board) => [
            [[0, 0], [1, 0]],
        ]
    * getPointsFromPlacement
        * Return points from placement
        * (dominoIndex, placement, board) => true or false
        * Return value
            * If -1, invalid sonorities
            * If 0, no invalid sonorities but also no valid chords
            * If greater than 0, valid chords
        * getAllRowsFromPlacement
            * Return all rows formed from placement
            * (dominoIndex, placement, board) => [
                pitchSet,
                pitchSet,
                pitchSet
            ]

* Basic UI that shows board and matrix
    * Generator page
    * Need blank domino svgs
        * All possible intervals * three orientations = 18 total
            * Helper to retrieve for orientation
    * Already have pitch svgs, but move under faces
    * Rename and reorganise svgs

* Helper to get