import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import GenderImg from "./assets/GENDER UN.png"
import MaleBossImg from "./assets/MaleBoss.jpg"
import Domestic_AbuseImg from "./assets/DOMESTIC-ABUSE.jpg"

function BasicExample() {
  return (
    <Card style={{ margin: "15px", width: '100%', display: "flex", backgroundColor: "transparent", flexDirection: 'row' }}>

      <Card.Img className='fancy-img' variant="top" src={GenderImg}/>
      

      <Card.Img className='fancy-img' variant="top" src={MaleBossImg}/>
        

      <Card.Img className='fancy-img' variant="top" src={Domestic_AbuseImg}/>
     
    </Card>
    
  );
}

export default BasicExample;
