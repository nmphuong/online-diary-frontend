import React from 'react'
import styled from 'styled-components';

import Header from '../Header'

// import bg_1 from '../../assets/background/bg-1.jpeg'
// import bg_2 from '../../assets/background/bg-2.jpeg'
// import bg_3 from '../../assets/background/bg-3.jpeg'
// import bg_4 from '../../assets/background/bg-4.jpeg'
// import bg_5 from '../../assets/background/bg-5.jpeg'
import bg_6 from '../../assets/background/bg-6.jpeg'
import bg_7 from '../../assets/background/bg-7.jpeg'
import bg_8 from '../../assets/background/bg-8.jpeg'
import bg_9 from '../../assets/background/bg-9.jpeg'
import bg_10 from '../../assets/background/bg-10.jpeg'
import bg_11 from '../../assets/background/bg-11.jpeg'
import bg_12 from '../../assets/background/bg-12.jpeg'
// import bg_13 from '../../assets/background/bg-13.jpeg'
import bg_14 from '../../assets/background/bg-14.jpeg'
import bg_15 from '../../assets/background/bg-15.jpeg'
import bg_16 from '../../assets/background/bg-16.jpeg'
import bg_17 from '../../assets/background/bg-17.jpeg'
import bg_18 from '../../assets/background/bg-18.jpeg'
import bg_19 from '../../assets/background/bg-19.jpeg'
import bg_20 from '../../assets/background/bg-20.jpeg'

const SquareFrame = () => {

    return (
        <>
            <Wrapper>
                <Header />

                <Frame width="20%" height="25%" bgi={bg_6}></Frame>
                <Frame width="20%" height="25%" bgi={bg_7}></Frame>
                <Frame width="20%" height="25%" bgi={bg_8}></Frame>
                <Frame width="20%" height="25%" bgi={bg_9}></Frame>
                <Frame width="20%" height="25%" bgi={bg_10}></Frame>

                <Frame width="20%" height="25%" bgi={bg_11}></Frame>
                <Frame width="20%" height="25%" bgi={bg_12}></Frame>
                <Frame width="20%" height="25%" bgi={""}><Text size="1.3rem">My Diary</Text></Frame>
                <Frame width="20%" height="25%" bgi={bg_14}></Frame>
                <Frame width="20%" height="25%" bgi={bg_15}></Frame>

                <Frame width="20%" height="25%" bgi={bg_16}></Frame>
                <Frame width="20%" height="25%" bgi={bg_17}></Frame>
                <Frame width="20%" height="25%" bgi={bg_18}></Frame>
                <Frame width="20%" height="25%" bgi={bg_19}></Frame>
                <Frame width="20%" height="25%" bgi={bg_20}></Frame>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
`;

const Frame = styled.div<{width?: string, height?: string, bgi?: string}>`
    background: url(${({bgi}) => bgi});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: ${({width}) => width};
    height: ${({height}) => height};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.p<{size?: string}>`
    margin: 0;
    font-size: ${({size}) => size ? size : '1rem'};
    color: ${({theme}) => theme.text1};
    font-weight: bold;
`;

export default SquareFrame