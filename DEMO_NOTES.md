# Demo notes

# TODO: demo page
* Need way to know difference between game playing and game ended
* Look into web workers for JavaScript calculations
    * Demo page takes time to load
* Responsive

* Log component
    * Scrolls to very bottom if more than height of parent and already scrolled to bottom
    * Highlights most recent log
* Analytics call

# TODO: next
* Play
    * Unit tests

* End
    * Unit tests

* Turns
    * Unit tests

* getBestPointedMovesForTurn
    * Starting to look ugly, refactor
    * Figure out why adding long sonority rule to rows increases the points for a unit test
        * See if this still happens without limit
    * Make more efficient
    * Know when there are ties, and select randomly from them
* Eventual AI
    * Know in advance what pitches are possible in adjacent coordinates, and don't bother trying those that are impossible?
    * Know when no possible moves are left to make with the dominoes remaining

* Basic UI that shows board and matrix
    * Need blank domino svgs
        * All possible intervals * three orientations = 18 total
            * Helper to retrieve for orientation
    * Already have pitch svgs, but move under faces
    * Rename and reorganise svgs