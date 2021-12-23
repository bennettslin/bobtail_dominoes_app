# TODO next
* Show hand if there is one

# TODO
* Unit tests for puzzle utils
* Puzzle component takes moves
    * Optionally also takes hand

# Regular puzzle utils
* Build board
* Util then iterates through remaining dominoes in random order
    * Until it finds a domino that builds at least a minimum number of chords
    * It repeats this until it has three dominoes
* It then runs those three dominoes to ensure it has the best possible combination
    * And randomizes them before placing in hand

# Missing puzzle utils
* Build board
* Determine which domino, once removed, would yield the most points
    * While meeting the minimum number
    * Ensure that no other available domino can legally have the same placement
* Remove domino from board
    * Needs missing domino svg

# Maximum puzzle utils
* Option for standard or extended set
# Puzzle types
* Switch up number of dominoes on board
* Switch up standard and extended set
* Play a regular hand
    * With each guaranteed to build two chords
* Figure out missing domino
    * Needs missing domino svg
* Choose piece to maximize points

* Standard and extended set
