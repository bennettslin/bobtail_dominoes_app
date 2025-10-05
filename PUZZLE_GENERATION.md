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
            * It must ensure the solution has enough points
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
        * Delete everything in "export default"
        * Copy the remaining code
    * In every other month's index.js
        * Highlight entire code
            * Paste to replace it
        * It's just faster this way
            * All months now have empty "export default"
            * Ignore linter warnings for unused variables, obviously
* In index.js of puzzles folder
    * Add new year to code

### Adding puzzles to files
* Copy snippet of code from admin page
    * Paste into "export default" of that month's index.js
    * Format code properly with shortcut (⌘ .)
* Ensure last day of month has been pasted!
    * In my experience, entire snippet may take a while
        * To get copied onto clipboard
            * I have no idea why
    * Only then is it safe to generate next month's worth

### Validation
* Rerun locally
    * Go to admin page
        * Set current date to future date
            * Puzzles menu should show all puzzles generated
        * Then set current date back to today's date
            * Puzzles page should start on today's date
                * Puzzles menu should show all puzzles up to today