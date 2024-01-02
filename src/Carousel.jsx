import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
  
export default function MyCarousel() { 
  return ( 
    <div style={{ display: 'block', marginLeft: "200px", justifyItem: "center", width: 800, padding: 10 }}> 
       
      <Carousel> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="https://media.istockphoto.com/id/1160073663/de/foto/symbol-für-ungleiche-zahlung-geschlechtssymbole-auf-verschiedenen-hohen-stapeln-von-münzen.jpg?s=1024x1024&w=is&k=20&c=Xl4UET3j0uEW1zM4xMzubNxfDIvRotyuOfsgqrzShUY="
            alt="Image One"
          /> 
          <Carousel.Caption> 
            <h3>FINANCIAL OPPOTUNITIES</h3> 
            <p>SALARIES PAID TO MALE AND FEMALE ARE 
              ALWAYS NOT THE SAME EVEN WHEN THEY PERFORM SAME WORKLOAD
              </p> 
          </Carousel.Caption> 
        </Carousel.Item> 

        <Carousel.Item interval={500}> 
          <img 
            className="d-block w-100"
src="https://media.istockphoto.com/id/1691806186/de/vektor/frau-in-einem-käfig-eingesperrt-traurige-frau-im-käfig-das-traurige-mädchen-braucht.jpg?s=1024x1024&w=is&k=20&c=Ef4lMXdcE3AqX1KG1DLVgpEWP2XJ0utMdlb7paB7tuU="
            alt="Image Two"
          /> 
          <Carousel.Caption> 
            <h3>FEMALE DOMENSTIC SLAVERY</h3> 
            <p>ALL HUMAN HAVE EQUAL RIGHTS</p> 
          </Carousel.Caption> 
        </Carousel.Item> 

        <Carousel.Item interval={500}> 
          <img 
            className="d-block w-100"
src="https://media.istockphoto.com/id/1792503400/de/foto/grüne-wassertropfen-vor-einer-verschwommenen-schwulen-und-lesbenflagge.jpg?s=612x612&w=is&k=20&c=1_7XmCGV3LzPQ6tRlWPQ7kgjYoiaiG2kca_AdiUlko8="
            alt="Image Three"
          /> 
          <Carousel.Caption> 
            <h3>LGBT RIGHTS</h3> 
            <p>THE LGBT ARE HUMAN AND THEIR RIGHTS MUST BE RESPECTED</p> 
          </Carousel.Caption> 
        </Carousel.Item> 
      </Carousel> 
    </div> 
  ); 
}