// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Image from '../../images/beverages.jpg';
// import {ScrollableContainer} from './gallery.styles';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#1c1d26',
//   // padding: theme.spacing(1),
//   textAlign: 'center',
//   color: 'white',
//   position: 'relative',
//   // border: '2px solid yellow'
// }));

// const images = [
//  Image,
//  Image,
//  Image
// ];

// const Gallery = () => {
//   return (
//     <><div style={{ color: 'white', fontSize: '30px', fontWeight: '500', padding: '30px 0px 10px 0px', textAlign: 'center' }}>
//       Gallery
//       </div>
//     <div style={{}}>
//       <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-around'}}>
//           <Grid  item style={{}}>
//             <Item>
//               <img style={{}}  src={Image} alt="" />
//               <div style={{position: 'absolute', alignItems: 'center', backgroundColor: 'white', width: '100%'}}>16</div>
//             </Item>
//             <div style={{color: 'white', fontSize: '20px', textAlign: 'center', padding: '20px'}}>Beverages</div>
//           </Grid>
//           <Grid item style={{}}>
//             <Item>
//               <img src={Image} alt="" />
//             </Item>
//             <div style={{color: 'white', fontSize: '20px', textAlign: 'center', padding: '20px'}}>Food</div>
//           </Grid>
//           <Grid item style={{}}>
//             <Item>
//               <img src={Image} alt="" />
//             </Item>
//             <div style={{color: 'white', fontSize: '20px', textAlign: 'center', padding: '20px'}}>Ambiance</div>
//           </Grid>
//       </Grid>
//     </div></>
//   );
// };

// export default Gallery;




import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from '../../images/beverages.jpg';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1c1d26',
  textAlign: 'center',
  color: 'white',
  position: 'relative',
}));

const Gallery = () => {
  const [beveragesImages, setBeveragesImages] = useState([]);
  const [foodImages, setFoodImages] = useState([]);
  const [ambianceImages, setAmbianceImages] = useState([]);

  const beveragesApi = [
    Image,
    Image,
    Image
  ];

  const foodApi = [
    Image,
    Image,
    Image,
    Image
  ];
  const ambianceApi = [
    Image,
    Image,
    Image,
    Image,
    Image,
    Image
  ];


  const renderImagesWithCount = (images: any, category: any) => {
    return (
      <>
          <Grid  style={{ position: 'relative', width: '300px', padding: '0px !important'}}>
            <Item>
              <div style={{position: 'relative'}}><img height="250px" src={Image} alt="" />
              {images.length > 1 && (
                <div style={{border: '2px solid white',cursor: 'pointer',fontWeight: '500', fontSize: '30px',display: 'flex', alignItems: 'center',textAlign: 'center',justifyContent: 'center',backgroundColor: '#80808085', position: 'absolute', top: '0%', left: '0%', borderRadius: '5px', padding: '0px', height: '98%', width: '105%', color: 'white' }}>
                  +{images.length - 1}
                </div>
              )}
              </div>
              <div style={{color: 'white', fontSize: '30px', fontWeight: '500', padding: '10px', textAlign: 'center'}}>{category}</div>
            </Item>
          </Grid>
      </>
    );
  };

  return (
    <>
      <div style={{ color: 'white', fontSize: '30px', fontWeight: '500', padding: '30px 0px 10px 0px', textAlign: 'center' }}>
        Gallery
      </div>
      <div style={{padding: '5% 0%'}}>
        <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'space-around' }}>
          {renderImagesWithCount(beveragesApi, 'Beverages')}
          {renderImagesWithCount(foodApi, 'Food')}
          {renderImagesWithCount(ambianceApi, 'Ambiance')}
        </Grid>
      </div>
    </>
  );
};

export default Gallery;

