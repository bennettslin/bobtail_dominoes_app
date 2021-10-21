import { join } from '../../../../utils/general'

const CLASS_REGEX = /class="/g
// The first quotation mark after the class is at index 7.
const FIRST_QUOTE_INDEX = 7
const STYLE_KEYS = ['animation', 'fill', 'stroke']

const getClassIndices = svgString => {
    let current
    const classIndices = []

    while ((current = CLASS_REGEX.exec(svgString)) !== null) {
        classIndices.push(current.index)
    }

    return classIndices
}

const getClassNamesSet = svgString => {
    const
        classIndices = getClassIndices(svgString),
        classNamesSet = new Set()

    classIndices.forEach(classIndex => {
        const
            beginQuoteIndex = classIndex + FIRST_QUOTE_INDEX,
            endQuoteIndex = svgString.indexOf('"', beginQuoteIndex)

        classNamesSet.add(
            svgString.substring(beginQuoteIndex, endQuoteIndex),
        )
    })

    return classNamesSet
}

const getClassStyles = ({ svgString, styles }) => {
    const classNamesSet = getClassNamesSet(svgString),
        classStyles = {}

    classNamesSet.forEach(className => {
        STYLE_KEYS.forEach(styleKey => {
            const classStyle = styles[styleKey]?.[className]
            if (classStyle) {
                classStyles[className] = classStyles[className] || []
                classStyles[className].push({
                    styleKey,
                    classStyle,
                })
            }
        })
    })

    return classStyles
}

const getClassStylesString = ({
    styleClassName,
    svgString,
    styles,
}) => {
    if (!styles) {
        return null
    }

    const classStyles = getClassStyles({ svgString, styles })

    return join(Object.keys(classStyles).map(className => {
        const styleStrings = classStyles[className].map(({
            styleKey,
            classStyle,
        }) => (
            `${styleKey}:${classStyle}`
        ))

        return `.${styleClassName} .${className}{${join(styleStrings, ';')}}`
    }))
}

export const getKeyframesString = (keyframes = []) => (
    join(keyframes.map(({ animationName, sequence }) => (
        `@keyframes ${animationName}{` +
        join(sequence.map(({ percentage, fillStyle }) => (
            `${percentage}%{fill:${fillStyle}}`
        ))) +
        '}'
    )))
)

export const getSvgWithClassStyles = ({
    styleClassName,
    svgString,
    keyframes = [],
    styles,
}) => {
    const
        stylesString = getClassStylesString({
            styleClassName,
            svgString,
            styles,
        }),
        stylesIndex = svgString.indexOf('>') + 1

    if (!styleClassName || !stylesString) {
        return svgString
    }

    return (
        svgString.substring(0, stylesIndex) +
        '<style>' +
        join([getKeyframesString(keyframes), stylesString], ' ') +
        '</style>' +
        svgString.substring(stylesIndex)
    )
}
