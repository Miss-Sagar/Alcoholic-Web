import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import GavelIcon from '@mui/icons-material/Gavel';
import MessageIcon from '@mui/icons-material/Message';
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Dropdown from '../../common/dropdown/dropdown';
import DropDown from '../../common/dropdown/dropdown';
import { Heading, SmallHeading, BookingWayCont, BookingWay, BookingGridCont, BookingTypeDiv, ChooseSubCont, ChooseCont } from './booking.styles';


const Booking = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    return (
            <div style={{ border: '2px solid orange' }}>
            <BookingWayCont style={{ border: '2px solid grey', position: 'relative', padding: '5% 10% ' }}>
                <Heading>3 Steps Easy Booking</Heading>
                <SmallHeading>Used a bunch of party options with just a few simple steps</SmallHeading>
                <BookingWay>
                    <BookingGridCont>
                        <BookingTypeDiv>
                            <div style={{ borderRadius: '100%', display: 'flex', textAlign: 'center', justifyContent: 'center', margin: '0px 30%', padding: '15% 30px', alignItems: 'center', color: 'white', backgroundColor: 'green' }}>
                                <MessageIcon style={{ color: 'white' }} />
                            </div>
                            <div style={{ padding: '10px 0px', color: 'white', textAlign: 'center', width: '100%' }}>Title1</div>
                        </BookingTypeDiv>
                        <BookingTypeDiv>
                            <div style={{ borderRadius: '100%', display: 'flex', textAlign: 'center', justifyContent: 'center', margin: '0px 30%', padding: '15% 0px', alignItems: 'center', color: 'white', backgroundColor: 'green' }}>
                                <GavelIcon style={{ color: 'white' }} />
                            </div>
                            <div style={{ padding: '10px 0px', color: 'white', textAlign: 'center', width: '100%' }}>Title1</div>
                        </BookingTypeDiv>
                        <BookingTypeDiv>
                            <div style={{ borderRadius: '100%', display: 'flex', textAlign: 'center', justifyContent: 'center', margin: '0px 30%', padding: '15% 0px', alignItems: 'center', color: 'white', backgroundColor: 'green' }}>
                                <CameraAltRoundedIcon style={{ color: 'white' }} />
                            </div>
                            <div style={{ padding: '10px 0px', color: 'white', textAlign: 'center', width: '100%' }}>Title1</div>
                        </BookingTypeDiv>
                    </BookingGridCont>
                </BookingWay>
            </BookingWayCont>

            <div>
                <Heading>Choose your club</Heading>
                <ChooseSubCont>
                    <ChooseCont>
                        <Checkbox style={{ color: 'white' }} />
                        Club 1
                    </ChooseCont>
                    <ChooseCont>
                        <Checkbox style={{ color: 'white' }} />
                        Club 2
                    </ChooseCont>
                    <ChooseCont>
                        <Checkbox style={{ color: 'white' }} />
                        Club 3
                    </ChooseCont>
                </ChooseSubCont>
            </div>

            <div>
                <Heading>Come to the party</Heading>
                <ChooseSubCont>
                    <ChooseCont>
                        <div>Today</div>
                        <div>11:00 AM</div>
                    </ChooseCont>
                    <ChooseCont>
                        Tomorrow
                        <div>11:00 AM</div>
                    </ChooseCont>
                    <ChooseCont>
                        Yesterday
                        <div>11:00 AM</div>
                    </ChooseCont>
                </ChooseSubCont>
            </div>

            <div>
                <Heading>Party Time</Heading>
                <ChooseSubCont>
                    <ChooseCont>
                        <div>11:00 AM</div>
                    </ChooseCont>
                    <ChooseCont>
                        <div>11:00 AM</div>
                    </ChooseCont>
                    <ChooseCont>
                        <div>11:00 AM</div>
                    </ChooseCont>

                </ChooseSubCont>
            </div>

                <div style={{ padding: '20px 20px', borderBottom: '3px solid grey', borderRadius: '5px' }}>
                    <div style={{ padding: '10px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                        <div>Male</div>
                        <div style={{ padding: ' 10px 20px', borderRadius: '10px', backgroundColor: '#d6144a', display: 'flex', alignItems: 'center', fontSize: '20px' }}>
                            <RemoveIcon onClick={handleDecrement} style={{ cursor: 'pointer' }} />
                            <div style={{ padding: '0px 10px' }}>{count}</div>
                            <AddIcon onClick={handleIncrement} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                    <div style={{ padding: '10px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                        <div>Female</div>
                        <div style={{ padding: ' 10px 20px', borderRadius: '10px', backgroundColor: '#d6144a', display: 'flex', alignItems: 'center', fontSize: '20px' }}>
                            <RemoveIcon onClick={handleDecrement} style={{ cursor: 'pointer' }} />
                            <div style={{ padding: '0px 10px' }}>{count}</div>
                            <AddIcon onClick={handleIncrement} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                    <div style={{ padding: '10px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                        <div>Kids</div>
                        <div style={{ padding: ' 10px 20px', borderRadius: '10px', backgroundColor: '#d6144a', display: 'flex', alignItems: 'center', fontSize: '20px' }}>
                            <RemoveIcon onClick={handleDecrement} style={{ cursor: 'pointer' }} />
                            <div style={{ padding: '0px 10px' }}>{count}</div>
                            <AddIcon onClick={handleIncrement} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', padding: '20px' }}>
                    <div style={{}}>
                        <div style={{ padding: '20px 0px' }}>Please Choose</div>
                        <DropDown />
                    </div>
                    <div>
                        <div style={{ padding: '20px 0px' }}>Please Choose</div>
                        <DropDown />
                    </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', padding: '20px' }}>
                    <div>
                        <div style={{ padding: '20px 0px' }}>Please Choose</div>
                        <DropDown />
                    </div>
                    <div>
                        <div style={{ padding: '20px 0px' }}>Please Choose</div>
                        <DropDown />
                    </div>
                </div>
            </div>
           
        
       
    )
}

export default Booking;
