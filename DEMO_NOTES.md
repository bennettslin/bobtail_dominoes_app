# Demo notes

* Responsive board challenge:
    * Make board always square
    * Make board in between info column and logs column

* getBestPointedMovesForTurn
    * Starting to look ugly, refactor
    * Figure out why adding long sonority rule to rows increases the points for a unit test
        * See if this still happens without limit
    * Make more efficient
    * Know when there are ties, and select randomly from them
* Eventual AI
    * Know in advance what pitches are possible in adjacent coordinates, and don't bother trying those that are impossible?
    * Know when no possible moves are left to make with the dominoes remaining
