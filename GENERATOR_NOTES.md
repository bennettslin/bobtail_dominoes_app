# Generator notes
* Board is array of placed dominoes in order, each with
    * domino index
    * board position: [x, y]
    * orientation: [X Y or XY, -1 or 1]

e.g.
[
    {
        dominoIndex: 5,
        position: [-4, 3],
        orientation: [X, -1]
    }
]

* Util to convert board to matrix

* Matrix is object of placed faces
    * Top level is x
    * Next level is y
    * Final level is pitch

e.g.
{
    0: {
        -1: 5,
        0: 6,
    },
    -1: {
        1, 2,
        2: 3,
    }
}

* Util to add domino to board
    * Only checks if face isn't already occupied


* Basic UI that shows board and matrix
    * Generator page
    * Need blank domino svgs
        * All possible intervals * three orientations = 18 total
            * Helper to retrieve for orientation
    * Already have pitch svgs, but move under faces
    * Rename and reorganise svgs

* Util to place domino on board

* Helper to get