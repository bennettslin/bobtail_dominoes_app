# Puzzle generation steps

### Puzzle generation
* Run locally
    * Go to admin page
    * Open console log
    * Ensure sound is on
* Set puzzle date
    * To first day of new month to generate
* Generate
    * A month's worth of daily puzzles will now be generated
    * Note that puzzle generator has zero intelligence
        * It only creates a board through random luck
            * Then it must ensure there's only one solution
        * So time needed to generate a month's worth
            * Is hard to predict in advance
            * In my experience, it can take 10 to 20 minutes
    * Harder puzzles take longer to generate
        * Puzzles get harder as week progresses
        * So Sunday puzzles take longest
            * Can easily take a thousand trials or more
    * For sanity check
        * Watch console log for activity
            * Failed trials are in small gray text
            * Successful ones are in large green text
* When month's worth is complete
    * Victory melody will sound
    * Puzzle date will already be set to next month
* In the meantime…

### File creation
* In src/content/puzzles
    * Copy folder of latest year
        * Rename to new year
    * In index.js of first month folder
        * Delete everything in the export default
        * Copy the remaining code
    * In every other month's index.js
        * Highlight entire code
            * Paste to replace it
        * It's just faster this way
            * All months now have empty export default
            * Ignore linter warnings for unused constants
* In index.js of puzzles folder
    * Add new year to code

### Adding puzzles to files
* Copy code from the admin page
    * Paste into the export default of that month's index.js
    * Format code properly with shortcut (⌘ .)
* Ensure entire month's worth of puzzles has been pasted!
    * In my experience, entire code may take a while
        * To be copied into clipboard
    * Only then is it safe to generate next month's
