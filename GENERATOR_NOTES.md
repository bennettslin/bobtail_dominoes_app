# Generator notes
* Print out hexagons

* Unit tests
    * board
        * addDominoToMatrix
    * matrix
        * addToMatrix
        * getFlattenedMatrix
    * coordinates
        * all
    * adjacent
        * done, just manually text after printing hexagons
    * placement


* getAllValidPlacements
    * Placement is pair of two coordinates, first is lower pitch, second is higher pitch.
    * Return all valid placements
    * (dominoIndex, board) => [
        {
            placement: [0, 0],
            points: 3
        }
    ]

* Basic UI that shows board and matrix
    * Generator page
    * Need blank domino svgs
        * All possible intervals * three orientations = 18 total
            * Helper to retrieve for orientation
    * Already have pitch svgs, but move under faces
    * Rename and reorganise svgs

* Helper to get