import React from 'react';
import { Link } from 'react-router-dom';
import { Image,  } from 'react-bootstrap';


function CarouselCard({url}) {

  return (
    <div >
      <Image src={url}/>
    </div>
  );
}

export default CarouselCard;
