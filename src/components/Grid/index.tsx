import React from 'react'
import styled from 'styled-components'
import SquareFrame from './squareFrame'

const Grid = () => {
    return (
        <>
            <Wrapper>
                <SquareFrame />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

export default Grid
