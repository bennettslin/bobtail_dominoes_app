# Demo notes

# TODO
* Real moves should not pass pitch sets to game?

* Pool and players need max width

* Util to position and size face
    * Determine relative distances within svgs
        * Accommodate edges and bottoms
    * Inline styling

* Pool has own svgs
    * Hexagons for pitches
    * Squares for intervals
    * Interval faces

* Util to position domino based on placement
* Util to determine order of placement for z-axis placement

* Domino component
    * Size of domino relative to board determined by JavaScript
        * Based on number of hexagons in grid
    * Need interval svgs
        * Util to determine interval orientation

* New solution for wide board
    * Will eventually want user to be able to hover over dominoes

* Make players, pool, and logs responsive
    * Logs
        * Fix auto scrolling
    * Players and pool
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
