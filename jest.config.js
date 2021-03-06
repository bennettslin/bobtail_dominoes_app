module.exports = {
    transform: {
        '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {
        '.+\\.(css|sass|scss)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|otf|ttf|svg|mp3)$': `<rootDir>/__mocks__/file-mock.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
        IS_PRODUCTION: true,
        IS_RUNTIME: false,
        window: {
            localStorage: {},
        },
    },
    testURL: `http://localhost`,
    // setupFiles: [`<rootDir>/loadershim.js`],
}
