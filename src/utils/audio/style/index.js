import { OCTAVE_COUNT } from '../../../constants/audio'
import { getMergedStyles } from '../../svgs'
import { OCTAVE_DURATION_TIME } from '../time'

const TOTAL_DURATION = OCTAVE_DURATION_TIME * OCTAVE_COUNT

export const getNestedAttacks = configEntity => {
    return configEntity ? Object.values(configEntity).map(entity => {
        return Number.isFinite(entity.attack) ?
            // It's a pitch index config.
            entity.attack :
            // It's a pitch config.
            getNestedAttacks(entity)
    }).flat() : null
}

// TODO.
export const getAnimationName = attacks => (
    'abcdefg'
)

// TODO: Return object.
export const getKeyframes = attacks => (
    `{ 0% { fill: green; } 20% { fill: red; } 40% { fill: green; } 60% { fill: red; } 80% { fill: green; } 100% { fill: red; } }`
)

export const getAnimatedStyleConfig = (
    styleConfig,
    playedConfigEntity,
) => {
    const
        attacks = getNestedAttacks(playedConfigEntity),
        animationName = getAnimationName(attacks)

    return playedConfigEntity ? ({
        className: [styleConfig.className, animationName].join(''),
        keyframes: [animationName, getKeyframes(attacks)].join(' '),
        styles: getMergedStyles([
            {
                animation: {
                    edge: `${animationName} ${TOTAL_DURATION}s`,
                    face: `${animationName} ${TOTAL_DURATION}s`,
                },
            },
            styleConfig.styles,
        ]),
    }) : styleConfig
}
