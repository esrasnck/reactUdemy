import React from 'react';
import { Container } from 'reactstrap';
import Navi from '../navi/Navi';
import DashBoard from './DashBoard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <Container>
    <Navi></Navi>
    <DashBoard></DashBoard>
   </Container>
  );
}

export default App;
