# Generator notes
* Unit tests
    * board
        * addToMatrix
        * addDominoToMatrix
    * matrix
        * addToMatrix
        * getFlattenedMatrix
    * coordinates
        * all
    * placement
        * getSurroundingCoordinates

* getAllValidPlacements
    * Placement is pair of two coordinates, first is lower pitch, second is higher pitch.
    * Return all valid placements
    * (dominoIndex, board) => [
        {
            placement: [0, 0],
            points: 3
        }
    ]
    * getAllPhysicalPlacements
    * Return all possible placements of a domino on a board
        * (dominoIndex, board) => [
            [[0, 0], [1, 0]],
        ]

* Basic UI that shows board and matrix
    * Generator page
    * Need blank domino svgs
        * All possible intervals * three orientations = 18 total
            * Helper to retrieve for orientation
    * Already have pitch svgs, but move under faces
    * Rename and reorganise svgs

* Helper to get