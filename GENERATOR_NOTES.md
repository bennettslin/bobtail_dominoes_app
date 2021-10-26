# Generator notes
* Under Play
    * Utils to handle pool, board, hands, and turns, and general play

    * Turns
        * Index 0 is placement of first domino
        * Each turn stores handIndex, dominoes in hand, dominoes played, dominoes drawn, chords and points
            * If no points, no dominoes played and just dominoes drawn, this means hand was exchanged
        * Util to add turn

    * Play
        * Util to add first domino
        * Util for player to play turn
            * Each player plays their best move
            * If a player cannot play a move, they exchange all their dominoes
            * Each player replenishes their hand
        * When no player can make a move, game ends
        * Calculate scores and determine winner 

* Moves
    * Do after hands
    * getBestMovesForTurn

* Demo
    * Maintains state of pool, board, hands, and turns
    * Plays a full game

* Simple demo page with textarea
    * Renders human-readable logs from turns

* Basic UI that shows board and matrix
    * Need blank domino svgs
        * All possible intervals * three orientations = 18 total
            * Helper to retrieve for orientation
    * Already have pitch svgs, but move under faces
    * Rename and reorganise svgs