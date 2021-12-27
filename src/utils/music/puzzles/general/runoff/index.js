export const addDominoToRunoffPool = ({ dominoIndex, runoffList }) => {
    runoffList.push(dominoIndex)
}

export const addDominoesFromRunoffPool = ({ move = {}, pool, runoffList }) => {
    const { dominoIndex: moveDominoIndex } = move

    runoffList.forEach(dominoIndex => {
        // Domino in move remains outside of pool.
        if (dominoIndex !== moveDominoIndex) {
            pool.add(dominoIndex)
        }
    })
}
