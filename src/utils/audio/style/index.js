export const getNestedAttacks = configEntity => {
    return Object.values(configEntity).map(entity => {
        return Number.isFinite(entity.attack) ?
            // It's a pitch index config.
            entity.attack :
            // It's a pitch config.
            getNestedAttacks(entity)
    }).flat()
}

export const getAnimatedStyleConfig = ({
    styleConfig,
    playedConfigEntity,
}) => {
    const attacks = getNestedAttacks(playedConfigEntity)
    // TODO: Append unique hash to className
    // TODO: Create custom animation
    // Must know duration constant
}

// const styleConfig = {
//     className: 'mockClassName',
//     styles: {
//         fill: {
//             classA: 'styleA',
//             classB: 'styleB',
//         },
//         stroke: {
//             classC: 'styleC',
//             classD: 'styleD',
//         },
//     },
// }

// const playedPitchConfig = {
//     0: {
//         36: { pitchIndex: 36, attack: 0 },
//         48: { pitchIndex: 48, attack: 0.25 },
//         60: { pitchIndex: 60, attack: 0.5 },
//     },
// }

// .testing {
//     .face {
//         animation: christmas 0.75s;
//     }
// }

// @keyframes christmas { 0% { fill: green; } 20% { fill: red; } 40% { fill: green; } 60% { fill: red; } 80% { fill: green; } 100% { fill: red; } }
