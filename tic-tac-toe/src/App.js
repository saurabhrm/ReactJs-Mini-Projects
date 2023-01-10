
import { useState } from 'react';

import Icon from './components/Icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container, Button, Col, Row} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty")

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [WinMassage, setWinMassage] = useState("")

  const reloadGame = () =>{
    setIsCross(false)
    setWinMassage("")
    itemArray.fill("empty", 0, 9);
  }

  const checkIsWinner = () =>{
    if(itemArray[0] !== itemArray[1] &&
      itemArray[0] === itemArray [2] &&
      itemArray[0] === "empty"
      ){
        setWinMassage(`${itemArray[0]} won`)
      } else if (
        itemArray[3] !== "empty" &&
      itemArray[3] === itemArray [4] &&
      itemArray[4] === itemArray [5]
      ){
        setWinMassage(`${itemArray[3]} won`)
      } else if (
        itemArray[6] !== "empty" &&
      itemArray[6] === itemArray [7] &&
      itemArray[7] === itemArray [8]
      ){
        setWinMassage(`${itemArray[6]} won`)
      } 
      else if (
        itemArray[0] !== "empty" &&
      itemArray[0] === itemArray [3] &&
      itemArray[3] === itemArray [6]
      ){
        setWinMassage(`${itemArray[0]} won`)
      }
      else if (
        itemArray[1] !== "empty" &&
      itemArray[1] === itemArray [4] &&
      itemArray[4] === itemArray [7]
      ){
        setWinMassage(`${itemArray[1]} won`)
      }
      else if (
        itemArray[2] !== "empty" &&
      itemArray[2] === itemArray [5] &&
      itemArray[5] === itemArray [8]
      ){
        setWinMassage(`${itemArray[2]} won`)
      }
      else if (
        itemArray[0] !== "empty" &&
      itemArray[0] === itemArray [4] &&
      itemArray[4] === itemArray [8]
      ){
        setWinMassage(`${itemArray[0]} won`)
      }
      else if (
        itemArray[2] !== "empty" &&
      itemArray[2] === itemArray [4] &&
      itemArray[4] === itemArray [6]
      ){
        setWinMassage(`${itemArray[2]} won`)
      }
  }

  const changeItem = itemNumber => {
    if(WinMassage){
      return toast (WinMassage, {type: "success"});
    }

    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber]= isCross ? "cross" : "circle"
      setIsCross(!isCross)

    }else {
      return toast ("already filled", {type: "error"})
    }

    checkIsWinner();
  }


  return (
    <Container className='p-5'>
    <ToastContainer position='bottom-center'/>  
    <Row>
      <Col md={6} className="offset-md-3">
        {WinMassage? (
          <div className='mb-2 mt-2'>
            <h1 className="text-success text-uppercase text-center">
              {WinMassage}
            </h1>
            <Button color='success' block onClick={reloadGame}>Reload The game</Button>
          </div>
        ):(
          <h1 className="text-center text-warr">
            {isCross? "Cross": "Circle"} turns
          </h1>
        )}
        <div className='grid'>
          {itemArray.map((item, index)=>(
            <Card color='warning' onClick={ ()=> changeItem(index) }>
              <CardBody className='box'>
                <Icon name={item}/>
              </CardBody>
            </Card>
          ))}
        </div>
      </Col>
    </Row>
      </Container>
  );
}

export default App;
