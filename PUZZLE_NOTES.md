# TODO
* Formatter util to show board as copyable string
* Figure out why movable board is offset

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
* Util takes in parameters
    * Number of starting dominoes
    * Strength of maximum points for starting dominoes

* Util tries each domino to find the one with the maximum points
* Parent util repeats this process until it finds

# Puzzle types
* Play a regular hand
    * With each guaranteed to build two chords
* Figure out missing domino
    * Needs missing domino svg
* Choose piece to maximize points