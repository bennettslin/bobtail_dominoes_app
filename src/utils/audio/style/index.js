import { OCTAVE_COUNT } from '../../../constants/audio'
import { getFixed } from '../../general'
import { getMergedStyles } from '../../svgs'
import { OCTAVE_DURATION_TIME } from '../time'

const TOTAL_DURATION = OCTAVE_DURATION_TIME * OCTAVE_COUNT

export const getNestedAttacks = configEntity => {
    if (!configEntity) {
        return null
    }
    if (Number.isFinite(configEntity.attack)) {
        return [configEntity.attack]
    }
    return Object.values(configEntity).map(entity => {
        return entity.attack
    })
}

export const getAnimationName = (attacks, className) => (
    // Name doesn't really matter. It just needs to be unique.
    [
        className,
        [getFixed(attacks[0]).replace('.', ''), attacks.length].join('_'),
    ].join('_')
)

// TODO: Return object.
export const getKeyframes = (attacks, playedConfigEntity) => {
    return (
        `{ 0% { fill: green; } 20% { fill: red; } 40% { fill: green; } 60% { fill: red; } 80% { fill: green; } 100% { fill: red; } }`
    )
}

export const getAnimatedStyleConfig = (
    styleConfig,
    playedConfigEntity,
) => {
    if (!playedConfigEntity) {
        return styleConfig
    }

    const
        { className, styles } = styleConfig,
        attacks = getNestedAttacks(playedConfigEntity),
        animationName = getAnimationName(attacks, className)

    return {
        className: [className, animationName].join(''),
        keyframes: [
            animationName,
            getKeyframes(attacks, playedConfigEntity),
        ].join(' '),
        styles: getMergedStyles([
            {
                animation: {
                    edge: `${animationName} ${TOTAL_DURATION}s`,
                    face: `${animationName} ${TOTAL_DURATION}s`,
                },
            },
            styles,
        ]),
    }
}
