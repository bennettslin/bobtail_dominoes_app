import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PageConfigContext from '../../contexts/PageConfig'
import StyledPage from './StyledPage'
import TabbedMenu from './TabbedMenu'
import Body from './Body'
import PageFooter from './Footer'
import Flex from '../../components/Flex'
import './style'

const Page = ({
    children,
    ...rest
}) => (
    <PageConfigContext.Provider {...{ value: rest }}>
        <StyledPage>
            <Flex
                {...{
                    className: cx(
                        'Page',
                    ),
                    flexDirection: 'column',
                    justifyContent: 'normal',
                }}
            >
                {/* This assumes children or markdown, but never both. */}
                {(children ? children : (
                    <>
                        <TabbedMenu />
                        <Body />
                        <PageFooter />
                    </>
                ))}
            </Flex>
        </StyledPage>
    </PageConfigContext.Provider>
)

Page.propTypes = {
    noShare: PropTypes.bool,
    showContactEmail: PropTypes.bool,
    children: PropTypes.node,
    pages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })),
    topLevelPage: PropTypes.string,
    pageHeading: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.shape({
        year: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
    }),
    body: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
}

export default Page
