# Demo notes

# TODO
* Real moves should not pass pitch sets to game?

* Figure out responsive board thing now
* Permanent solution for wide board
    * Other than z-index
    * Will eventually want user to be able to hover over dominoes

* Pool and players need max width
    * Make responsive

* Util to position and size intervals
    * Need three orientations for each one

* Pool has own svgs
    * Hexagons for pitches
    * Squares for intervals
    * Interval faces

* Domino component
    * Board is responsible for number of faces per board
    * Need interval svgs
        * Util to determine interval orientation

* Make players, pool, and logs responsive
    * Logs
        * Fix auto scrolling

* Highlight most recent dominoes and turns

* Board positioning
    * Centre board as dominoes are added
    * Zoom out board when needed

* Analytics call

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
