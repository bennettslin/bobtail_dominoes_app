export const getBeforeEach = () => () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
}

export const getAfterEach = () => () => {
    jest.spyOn(global.Math, 'random').mockRestore()
}
