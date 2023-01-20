import React,{ useEffect, useState }  from 'react';

import {Container, Row, Col} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import axios from 'axios';
import Cards from './Cards';



function App() {

const [details, setDetails] = useState({});

const fetchDetails =async ()=>{
  const {data} = await axios.get("https://randomuser.me/api/");
  console.log("RESPONSE : ", data);

  const details = data.results[0];

  setDetails(details)
}

useEffect(()=>{
  fetchDetails()
},[]);

  return (
    <Container fluid className='p-4 bg-primary App'>
      <Row>
        <Col md={4} className='offset-md-4 mt-4'>
          <Cards details={details}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
