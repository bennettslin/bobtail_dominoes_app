import React, { useEffect, useRef } from 'react'
import Iframe from '../Iframe'

const Pdf = () => {
    const pdfElement = useRef()

    useEffect(() => {
        if (pdfElement.current) {
            // This prevents iframe src from adding to browser history.
            pdfElement.current.contentWindow.location.replace(
                'https://www.bobtailyearlings.com/docs/Dyadminoes_rules.pdf',
            )
        }
    }, [])

    return (
        <Iframe
            {...{
                ref: pdfElement,
            }}
        />
    )
}

export default Pdf
