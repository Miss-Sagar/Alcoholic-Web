import styled from "styled-components";
import Grid from '@mui/material/Grid';

export const Heading = styled.div`
    color: white;
    padding: 5x;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`
export const SmallHeading = styled.div`
    color: white;
    padding: 5x;
    font-size: 15px;
    font-weight: 300;
    text-align: center;
`
export const BookingWayCont = styled.div`
    // margin: 10% 0%;
`;

export const BookingWay = styled.div`
`;

export const BookingGridCont = styled(Grid)`
    margin: 5% 0px 0px 0px !important;
    padding: 0px !important;
    display: flex !important;
    flex-direction: raw !important;
    align-items: center;
    justify-content: center;
    text-align: center;
    // border: 2px solid yellow;

    @media screen and (max-width: 620px) {
        flex-direction: column !important;
    }
`

export const BookingTypeDiv = styled.div`
    width: 100%;
    padding: 20px;
`

export const ChooseSubCont = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;

    @media screen and (max-width: 420px) {
        flex-direction: column ;
    }
`

export const ChooseCont = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding: 20px 40px;
    border: 1px solid white;
    border-radius: 10px;
    cursor: pointer;
`
