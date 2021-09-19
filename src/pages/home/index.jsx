import React from 'react'
import DominoSvg from '../../components/Svgs/Domino'
import Page from '../../containers/Page'
import dominoesPlayingValid from '../../assets/svgs/rules/dominoesPlayingValid'

const Component = () => (
    <Page>
        <DominoSvg {...{ src: dominoesPlayingValid }} />
    </Page>
)

export default Component
