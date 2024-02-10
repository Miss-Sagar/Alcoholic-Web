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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#23a584',
    // padding: '10px',
    textAlign: 'center',
    border: '1px solid red',
    borderRadius: '100%'
}));

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
        <div>
            <div style={{ margin: '0px 20%' }}>
                <div style={{ border: '2px solid grey', position: 'relative' }}>
                    <div style={{ color: 'white', padding: '5px', fontSize: '20px', fontWeight: '500', textAlign: 'center' }}>3 Steps Easy Booking</div>
                    <div style={{ color: 'white', padding: '5px', fontSize: '15px', fontWeight: '300', textAlign: 'center' }}>Used a bunch of party options with just a few simple steps</div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '40px 0px 20px 0px' }}>
                        <Grid container spacing={4} >
                            <Grid item xs={4} style={{ textAlign: 'center' }}>
                                {/* <div style={{ alignItems: 'center', backgroundColor: 'green', textAlign: 'center', borderRadius: '100%', paddingTop: '', height: '100px', width: '100px' }}> */}
                                <MessageIcon style={{ marginTop: '35px', color: 'white' }} />
                                {/* </div> */}
                                <div style={{ padding: '20px', color: 'white' }}>Title1</div>
                            </Grid>
                            <Grid item xs={4} style={{ textAlign: 'center' }}>
                                {/* <div style={{ backgroundColor: 'green', textAlign: 'center', borderRadius: '100%', padding: '', height: '100px', width: '100px' }}> */}
                                <GavelIcon style={{ marginTop: '35px', color: 'white' }} />
                                {/* </div> */}
                                <div style={{ padding: '20px', color: 'white' }}>Title1</div>
                            </Grid>
                            <Grid item xs={4} style={{ textAlign: 'center' }}>
                                {/* <div style={{ backgroundColor: 'green', textAlign: 'center', borderRadius: '100%', padding: '', height: '100px', width: '100px' }}> */}
                                <CameraAltRoundedIcon style={{ marginTop: '35px', color: 'white' }} />
                                {/* </div> */}
                                <div style={{ padding: '20px', color: 'white' }}>Title1</div>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ position: 'absolute',bottom: '-25px', left: '30%', right: '40%', textAlign: 'center', padding: '40px 40px -40px 40px' }}>
                        <div style={{ width: '100%', textAlign: 'center', margin: 'auto', color: 'white', backgroundColor: '#d6144a', padding: '10px 40px 10px 40px', borderRadius: '30px' }}>Share Requirement</div>
                    </div>
                </div>
                <div>
                    <div style={{ color: 'white', padding: '20px' }}>Choose your club</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', color: 'white', padding: '20px 40px', border: '1px solid white', borderRadius: '10px' }}>
                            <Checkbox />
                            Club 1
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', color: 'white', padding: '20px 40px', border: '1px solid white', borderRadius: '10px' }}>
                            <Checkbox />
                            Club 2
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', color: 'white', padding: '20px 40px', border: '1px solid white', borderRadius: '10px' }}>
                            <Checkbox />
                            Club 3
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div style={{ color: 'white', padding: '20px' }}>Come to the party</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', color: 'white', padding: '30px 40px', border: '1px solid white', borderRadius: '10px' }}>
                                <div>Today</div>
                                <div>11:00 AM</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', color: 'white', padding: '30px 40px', border: '1px solid white', borderRadius: '10px' }}>
                                Tomorrow
                                <div>11:00 AM</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', color: 'white', padding: '30px 40px', border: '1px solid white', borderRadius: '10px' }}>
                                Yesterday
                                <div>11:00 AM</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div style={{ color: 'white', padding: '20px' }}>Party Time</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', color: 'white', padding: '40px', border: '1px solid white', borderRadius: '10px' }}>
                                <div>11:00 AM</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', color: 'white', padding: ' 40px', border: '1px solid white', borderRadius: '10px' }}>
                                <div>11:00 AM</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', color: 'white', padding: '40px', border: '1px solid white', borderRadius: '10px' }}>
                                <div>11:00 AM</div>
                            </div>

                        </div>

                    </div>
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
        </div>
    )
}

export default Booking;
