# Generator notes

# TODO: next
* Render logs from turns rather than board
* Play utils return if game ended
* Get domino label for pitches, by interval
    * Separated by -

* Turns
    * A turn is:
        * First domino (only has dominoIndex)
        * Or play (has hand, playerIndex, and moves)
        * Or exchange (Only has hand and playerIndex)
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
        * Calculates score and determines winner

* Ensure that pitch sets in moves are always in order, both in orientation and in direction

* getBestPointedMovesForTurn
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