# TODO next
* Answer view places moves on board
    * And renders log
        * Each move shows chord and points
        * If multiple dominoes, also show total points

# TODO
* Unit tests for puzzle utils
* Puzzle component takes moves
    * Optionally also takes hand

# Regular puzzle utils
* Util takes in parameters
    * Number of starting dominoes
    * Strength of maximum points for starting dominoes
* Util then iterates through remaining dominoes in random order
    * Until it finds a domino that builds at least two chords
    * It repeats this until it has three dominoes
* It then runs those three dominoes to ensure it has the best possible combination

# Missing puzzle utils

# Maximum puzzle utils

# Puzzle types
* Switch up number of dominoes on board
* Switch up standard and extended set
* Play a regular hand
    * With each guaranteed to build two chords
* Figure out missing domino
    * Needs missing domino svg
* Choose piece to maximize points