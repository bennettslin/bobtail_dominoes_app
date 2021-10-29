import { getIsFinalTurn } from '.'

describe.skip('getIsFinalTurn', () => {
    it('generates scores for one hand', () => {
        expect(getIsFinalTurn(1)).toStrictEqual([0])
    })

    it('generates scores for four hands', () => {
        expect(getIsFinalTurn(4)).toStrictEqual([0, 0, 0, 0])
    })
})
