import { getFixed, join, round } from '../../../general'
import { getMergedStyles } from '../../../svgs'
import styleConfigPlayedOn from '../../../../styles/checker/playedOn'
import {
    ANIMATED_NOTE_DURATION,
    ANIMATED_TOTAL_DURATION,
} from '../../../../constants/music/audio'

const
    PATH_CLASS_NAMES = ['edge', 'face'],
    ANIMATED_BUFFER_DURATION = 0.001

export const getAttacks = configEntity => {
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

export const getAnimationName = ({
    attacks,
    className,
    pathClassName,
}) => (
    // Name doesn't really matter. It just needs to be unique.
    join([
        className,
        pathClassName,
        join([
            getFixed(attacks[0]).replace('.', ''),
            attacks.length,
        ], '_'),
    ], '_')
)

const getStyleFromConfig = (
    styleConfig,
    pathClassName,
) => styleConfig.styles.fill[pathClassName]

const getAnimationEntry = (fillStyle, value, adjust = 0) => ({
    percentage: round(value / ANIMATED_TOTAL_DURATION * 100 + adjust, 3),
    fillStyle,
})

export const getKeyframesSequence = ({
    attacks,
    styleConfig,
    pathClassName,
}) => {
    const
        defaultStyle = getStyleFromConfig(styleConfig, pathClassName),
        playedStyle = getStyleFromConfig(styleConfigPlayedOn, pathClassName)

    const sequence = []
    let counter = 0,
        previousAttackEnd = 0

    while (counter <= attacks.length) {
        const attack = attacks[counter]

        /**
         * Add entries if subsequent attack and previous attack ended, or
         * final iteration.
         */
        if (
            (counter && attack > previousAttackEnd) ||
            counter === attacks.length
        ) {
            sequence.push(getAnimationEntry(playedStyle, previousAttackEnd, -ANIMATED_BUFFER_DURATION))
            sequence.push(getAnimationEntry(defaultStyle, previousAttackEnd))
        }

        /**
         * Add entries if first attack, or not final iteration and previous
         * attack ended.
         */
        if (
            !counter ||
            (attack > previousAttackEnd && counter !== attacks.length)
        ) {
            sequence.push(getAnimationEntry(defaultStyle, attack))
            sequence.push(getAnimationEntry(playedStyle, attack, ANIMATED_BUFFER_DURATION))
        }

        previousAttackEnd = attack + ANIMATED_NOTE_DURATION
        counter++
    }

    return sequence
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
        attacks = getAttacks(playedConfigEntity)

    return {
        className: getAnimationName({ attacks, className }),
        keyframes: PATH_CLASS_NAMES.map(pathClassName => ({
            animationName: getAnimationName({
                attacks,
                className,
                pathClassName,
            }),
            sequence: getKeyframesSequence({
                attacks,
                styleConfig,
                pathClassName,
            }),
        })),
        styles: getMergedStyles([
            {
                animation: PATH_CLASS_NAMES.reduce((config, pathClassName) => {
                    const animationName = getAnimationName({
                        attacks,
                        className,
                        pathClassName,
                    })
                    config[pathClassName] = join([
                        animationName,
                        `${ANIMATED_TOTAL_DURATION}s`,
                    ], ' ')
                    return config
                }, {}),
            },
            styles,
        ]),
    }
}
