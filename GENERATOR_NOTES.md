# Generator notes
* Under Play
    * Hands
        * Util to play hand?

    * Turns
        * Util to add turn
            * Turn is either first domino
            * Or regular play
            * Or exchange
        * Turn 0 is placement of first domino
        * Each turn stores
            * handIndex
            * moves
            * dominoes in hand
            * If no points, no dominoes played and just dominoes drawn, this means hand was exchanged

    * Play
        * Util for player to play turn
            * Each player plays their best move
            * If a player cannot play a move, they exchange all their dominoes
            * Each player replenishes their hand
        * When no player can make a move, game ends
        * Calculate scores and determine winner

* Demo component
    * Maintains state of pool, board, hands, and turns
    * Plays a full game
        * Upon load
            * Generate pool, board, hands, turns
        * Plays the best move for each player
        * Finishes game
        * Calculates score and determines winner
    * Renders human-readable logs from turns

* getBestMovesForTurn
    * Make more efficient
    * Return when no moves can be made
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