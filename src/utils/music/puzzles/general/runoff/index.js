export const addDominoToRunoffPool = ({ dominoIndex, runoffList }) => {
    runoffList.push(dominoIndex)
}

export const addDominoesFromRunoffPool = ({
    chosenDominoIndex,
    pool,
    runoffList,

}) => {
    runoffList.forEach(dominoIndex => {
        // Chosen domino remains outside of pool.
        if (dominoIndex !== chosenDominoIndex) {
            pool.add(dominoIndex)
        }
    })
}
