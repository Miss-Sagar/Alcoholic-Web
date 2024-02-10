import { MainContainer } from "./footer.styles";
import NearMeIcon from '@mui/icons-material/NearMe';

export default function footer() {
  return (
    <MainContainer>
      <div style={{ color: 'white', padding: '10px', fontSize: '30px', fontWeight: '500', textAlign: 'center' }}>ALCOHOLIC + FOOD</div>
      <div style={{}}>
        <div style={{ color: 'grey', padding: '5px', fontSize: '20px', fontWeight: '500', textAlign: 'center' }}>Unwind Cafe & Bar</div>
        <div style={{ color: 'white', padding: '5px', fontSize: '15px', fontWeight: '500', textAlign: 'center' }}>Rajouri Garden Main Market, Rajouri Garden, 670.5KM away,</div>
      </div>
      <div style={{ color: 'white', padding: '5px', fontSize: '15px', fontWeight: '500', textAlign: 'center' }}>Timings: 11am to 11:30pm Today</div>
      <div style={{ textAlign: 'center',padding: '10px'}}>
        <div style={{ cursor: 'pointer',padding: '5px', border: '1px solid white', borderRadius: '5px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%', margin: 'auto' }}>
          <NearMeIcon style={{ marginRight: '5px', color: 'blue' }} />
          Get Discuss
        </div>
      </div>

    </MainContainer>
  );
}