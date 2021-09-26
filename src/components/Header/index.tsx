import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <>
            <Wrapper>
                <Action>
                    <Link size="2rem">DRO</Link>
                </Action>
                <Action>
                    <Link size="1rem">Login</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link size="1rem">Register</Link>
                </Action>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Action = styled.div`
    padding: 0px 50px;
`;

const Link = styled.a<{size?: string}>`
    font-size: ${({size}) => size}
`;

export default Header