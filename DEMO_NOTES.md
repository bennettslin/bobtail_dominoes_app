# Demo notes

# TODO
* Real moves should not pass pitch sets to game?

* Domino component
    * Renders domino svgs based on orientation and interval
        * Need interval helper
    * Rough absolute placement

* Make players, pool, and logs responsive
    * Logs really just need max width
        * Fix shadow text?
        * Fix auto scrolling
    * Players and pool
        * Need max width
        * Show domino components
        * Pool needs order

* Log component
    * Highlights most recent log
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
