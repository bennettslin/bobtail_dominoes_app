# Demo notes
* Account for menu height on page load
* Timeout to account for sound playing
    * But have next move ready

* Controls should be in landscape...

# TODO: Game options
* Figure out parent arcade button component for checker and demo buttons.
* Distinguish between initialise game and start game

* getBestPointedMovesForTurn
    * Starting to look ugly, refactor
    * Figure out why adding long sonority rule to rows increases the points for a unit test
        * See if this still happens without limit
    * Make more efficient
    * Know when there are ties, and select randomly from them
* Eventual AI
    * Know in advance what pitches are possible in adjacent coordinates, and don't bother trying those that are impossible?
    * Know when no possible moves are left to make with the dominoes remaining