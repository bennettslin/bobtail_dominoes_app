import { logAnalytics } from './src/utils/analytics'
import { logBuild } from './src/utils/build'
import { logDevice } from './src/utils/device'
import { globaliseLogs } from './src/utils/global'

// Import these here just to make them available.
import './src/scss/style'

globaliseLogs()

logBuild()
logDevice()
logAnalytics()

logSuccess(`Hi, I'm looking for other developers to help me build some apps. One is an interactive platform that teaches songwriting, the other is a musical tile game. I can pay you a fixed sum. (These apps will be free, probably.) If this sounds interesting to you, please tell me your story and send examples of your work to the contact email given on this website. Thanks! Bennett`)

export { wrapRootElement } from './src/utils/gatsby'
