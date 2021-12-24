# TODO next
* Show hand if there is one
    * Empty hand 
* Puzzles should show navigation

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

# Puzzle types
* Switch up number of dominoes on board
* Play a regular hand
    * With each guaranteed to build two chords
* Figure out missing domino
    * Needs missing domino svg
* Choose piece to maximize points