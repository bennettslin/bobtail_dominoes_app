const CLASS_REGEX = /class="/g
// The first quotation mark after the class is at index 7.
const FIRST_QUOTE_INDEX = 7

const getClassIndices = svgString => {
    let current
    const classIndices = []

    while ((current = CLASS_REGEX.exec(svgString)) !== null) {
        classIndices.push(current.index)
    }

    return classIndices
}

const getClassNames = svgString => {
    const
        classIndices = getClassIndices(svgString),
        classNames = new Set()

    classIndices.forEach(classIndex => {
        const
            firstQuoteIndex = classIndex + FIRST_QUOTE_INDEX,
            secondQuoteIndex = svgString.indexOf('"', firstQuoteIndex)

        classNames.add(svgString.substring(firstQuoteIndex, secondQuoteIndex))
    })

    return classNames
}

const getClassStyles = ({ svgString, styles }) => {
    const classNames = getClassNames(svgString),
        classStyles = {}

    classNames.forEach(className => {
        if (styles.fill[className]) {
            classStyles[className] = styles.fill[className]
        }
    })

    return classStyles
}

export const getSvgWithClassStyles = ({
    svgString,
    styles,
}) => {
    if (!styles) {
        return svgString
    }

    const classStyles = getClassStyles({ svgString, styles }),
        stylesString = Object.keys(classStyles).reduce((sum, className) => (
            sum +
            // TODO: Allow for multiple styles to be passed. But do this in getClassStyles instead.
            `.${className}{fill:${classStyles[className]}}`
        ), '')

    if (!stylesString) {
        return svgString
    } else {
        const stylesIndex = svgString.indexOf('>') + 1
        return (
            svgString.substring(0, stylesIndex) +
            `<style>${stylesString}</style>` +
            svgString.substring(stylesIndex)
        )
    }

}
