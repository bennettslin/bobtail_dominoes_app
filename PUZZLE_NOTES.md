# Do entire month at once
* Have engine component
    * Refactor to make test generation based on Redux queue
    * Knows how many days in month of puzzle test day
        * https://date-fns.org/v2.28.0/docs/getDaysInMonth
* Generate month button
    * Resets puzzle test date to first day of that month
    * Begins generating puzzles
* When day's puzzle is generated
    * Append text to text stored in component state
    * Increment puzzle test date
    * Follow with
        * When not the last day
            * Generate next puzzle
        * When last day
            * Play sound
