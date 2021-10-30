import { getIsGameEnd } from '.'

describe.skip('getIsGameEnd', () => {
    it('generates scores for one hand', () => {
        expect(getIsGameEnd(1)).toStrictEqual([0])
    })

    it('generates scores for four hands', () => {
        expect(getIsGameEnd(4)).toStrictEqual([0, 0, 0, 0])
    })
})
