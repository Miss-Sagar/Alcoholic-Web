import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from '../../images/product_4.png';
import {ScrollableContainer} from './teaser.styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1c1d26',
  // padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white'
}));

const images = [
  { pic: Image, title: 'Party Teaser' },
  { pic: Image, title: 'Ambiance Teaser' },
  { pic: Image, title: 'Food Teaser' },
  { pic: Image, title: 'Party Teaser' },
  { pic: Image, title: 'Ambiance Teaser' },
  { pic: Image, title: 'Food Teaser' },
  { pic: Image, title: 'Party Teaser' },
  { pic: Image, title: 'Food Teaser' },
];

const Teaser = () => {
  return (
    <><div style={{ color: 'white', fontSize: '30px', fontWeight: '500', padding: '30px 0px 10px 0px', textAlign: 'center' }}>TEASER</div><ScrollableContainer style={{ overflowX: 'auto' }}>
      <Grid container spacing={2} style={{ display: 'flex', width: `${images.length * 300}px` }}>
        {images.map((img, index) => (
          <Grid key={index} item style={{ width: '300px' }}>
            <Item>
              <img height="300px" src={img.pic} alt="" />
              <div style={{ padding: '20px' }}>{img.title}</div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </ScrollableContainer></>
  );
};

export default Teaser;
