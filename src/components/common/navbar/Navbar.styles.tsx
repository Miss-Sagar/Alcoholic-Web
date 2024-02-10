import styled from "styled-components";

interface MainContainerProps {
    isMobile: boolean;
  }

export const MainContainer = styled.div<MainContainerProps>`
    display: flex;
    justify-content: ${props => !props.isMobile ? 'space-around' : 'left'};
    align-items: center;
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #3f4359;
    color: white;
    z-index: 1000;
    position: relative;
`;


export const LeftContainer = styled.div`
    cursor: pointer;
`

export const ShopperText = styled.div`
    color: white;
    font-weight: 500;
    font-size: 30px;
    padding: 10px;
`

export const MiddleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
`;

export const MiddleContainerMobile = styled.div`
    position: absolute;
    width: 100%;
    text-align: left;
    top: 50px;
    left: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #3f435999;
`

export const TabLinks = styled.div`
    padding: 20px;
    color: white;
`

export const RightContainer = styled.div`
    display: flex;
    justify-content: space-between; 
`

export const LoginBtn = styled.button`
    border: 1px solid grey;
    color: black;
    padding: 5px 25px;
    border-radius: 15px;
    margin: 0px 20px;
    cursor: pointer;
`

export const CartImgContainer = styled.div`
    position: relative;
    color: white;
`

export const CartItemValue = styled.div`
    // padding: 0.5px;
    text-align: center;
    color: white;
    background-color: #d00d0d;
    border-radius: 100%;
    position: absolute;
    top: -5px;
    right: -15px;
    bottom: 15px;
    left: 20px;
    // font-size: 20px;
`