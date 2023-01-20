import React from 'react'
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa"

function Cards({details}) {
  return (
    <Card>
        <CardBody className='text-center'>
            <img height='150' width='150' className='rounded-circle img-thumbnail border-danger' src={details.picture?.large} />
         <CardTitle className='text-primary'>
          <h1>
            <span className='px-2'>{details.name?.title}</span>
            <span >{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
          </CardTitle>
          <CardText>
            <FaMapMarkedAlt/>
            {details.location?.city}
            <p><FaPhone/>{details.phone}</p>
            <p><FaEnvelope/>{details.email}</p>
            </CardText>  
        </CardBody>
    </Card>
  )
}

export default Cards;