import { MainContainer } from './menu.styles';
import MainImg from '../../images/mainImg.png';

export default function menu() {
  return (
    <MainContainer>
      <img height="400px" width='100%' src={MainImg}/>
    </MainContainer>
  )
}
