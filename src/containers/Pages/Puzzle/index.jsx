import React from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import PuzzleSvg from '../../../components/Svgs/Puzzle'
import Page from '../../Page'
import NotFoundPage from '../NotFound'

const PuzzlePage = ({
    didMount,
    pageMap,
    content,
    puzzle,
    answer,
}) => (
    /**
     * Server side always has page map, client side only has it for past and
     * present dates. So we'll always render empty page on server side. Then
     * upon mount on client side, we'll pass page map to page if it exists, or
     * else swap with not found page if it doesn't.
     */
    !didMount || pageMap ? (
        <Page
            {...didMount && {
                ...pageMap,
                body: [
                    content,
                    (
                        <PuzzleSvg
                            {...{
                                puzzle,
                                answer,
                            }}
                        />
                    ),
                ],
            }}
        />
    ) : (
        <NotFoundPage />
    )
)

PuzzlePage.propTypes = {
    didMount: PropTypes.bool.isRequired,
    pageMap: PropTypes.shape({
        id: PropTypes.string.isRequired,
        pages: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            date: PropTypes.shape({
                year: PropTypes.number.isRequired,
                month: PropTypes.number.isRequired,
                day: PropTypes.number.isRequired,
            }),
            pathDate: PropTypes.shape({
                year: PropTypes.number.isRequired,
                month: PropTypes.number.isRequired,
                day: PropTypes.number.isRequired,
            }),
        })),
        topLevelPage: PropTypes.string.isRequired,
        date: PropTypes.shape({
            year: PropTypes.number.isRequired,
            month: PropTypes.number.isRequired,
            day: PropTypes.number.isRequired,
        }),
        pathDate: PropTypes.shape({
            year: PropTypes.number.isRequired,
            month: PropTypes.number.isRequired,
            day: PropTypes.number.isRequired,
        }),
    }),
    content: PropTypes.string,
    puzzle: PropTypes.string,
    answer: PropTypes.string,
}

export default getDidMountHoc(PuzzlePage)
