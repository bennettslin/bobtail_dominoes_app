# Generator notes
* Placement
    * Util to play best move for hand of three dominoes
        * Include bonus for using all dominoes

* Under play
    * Pool
        * Util to generate pool
        * Util to remove random domino from pool
        * Util to exchange all dominoes

    * Board
        * Util to add domino to board
        * Domino in board has record of handIndex
        * Domino in board has record of points

    * Hands
        * Util to generate hand of three dominoes
        * Util to play hand
        * Util to replenish hand
        * Util to exchange hand

    * Turns
        * Add first domino
        * Util for player to play turn
            * Each player plays their best move
            * If a player cannot play a move, they exchange all their dominoes
            * Each player replenishes their hand
        * When no player can make a move, game ends
        * Calculate scores and determine winner 

* Demo
    * Maintains state of pool, board, and hands
    * 
    * Plays a full game

* Simple demo page with textarea
    * Renders human-readable logs from board

* Basic UI that shows board and matrix
    * Need blank domino svgs
        * All possible intervals * three orientations = 18 total
            * Helper to retrieve for orientation
    * Already have pitch svgs, but move under faces
    * Rename and reorganise svgs