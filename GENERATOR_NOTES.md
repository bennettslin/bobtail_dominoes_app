# Generator notes
* Under Play
    * Utils to handle pool, board, hands, and turns, and general play

    * Pool
        * Util to generate pool
            * Create set
        * Util to remove random domino from pool
        * Util to exchange dominoes
            * You can only exchange however many are in the pool

    * Board
        * Util to add domino to board

    * Hands
        * Util to draw into hand
        * Util to play hand
        * Util to exchange hand

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

* Placement
    * Do after hands
    * Util to play best move for hand
        * Include bonus for using all dominoes

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