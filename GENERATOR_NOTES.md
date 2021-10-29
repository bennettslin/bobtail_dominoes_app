# Generator notes

# TODO: next
* Turn log says played full hand or not

* Play utils return if game ended
    * Last turn is a turn, has winner indices
    * Unit tests

* Turns
    * Turns don't need player index?
    * Distinguish between exchange and pass
        * Can't just be based on moves, for eventual play
    * Unit tests

* Other utils
    * getChordsTextList (Make chord abbreviations, smallest interval size)
        * Unit tests

* Play
    * Utils return if game ended
        * Either everyone exchanges twice
        * Or after pool is empty
            * Every player gets one more turn
    * Unit tests

* Demo component
    * Plays a full game
        * Finishes game
        * Calculates score from last turn and determines winner

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