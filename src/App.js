import React,{useState} from 'react';
import { Container, Row, Form,Col } from 'react-bootstrap'
import axios from 'axios'
import './App.css';
import Meme from './Meme';

function App() {
  const [memes, setMemes]=useState([])
  const [header, setHeader]=useState("")
  const [footer, setFooter]=useState("")
  const url="https://api.imgflip.com/get_memes"
  const getMeme=async()=>{
    const response=await axios.get(url)
    console.log(response.data.data)
    setMemes(response.data.data.memes)
  }
  window.onload=()=>{
getMeme()
  }
  const onClick=()=>{

  }
  const onHeaderChange=(e)=>{
           setHeader(e.target.value)
  }
  const onFooterChange=(e)=>{
          setFooter(e.target.value)
  }  
const onSubmit=()=>{
  
}
  return (
    <>
   
    <h1 className="" style={{textAlign:'center'}}>Meme Pictures</h1>
    <Form style={{width:'77%',margin:'auto'}} onSubmit={onSubmit}>
      <Row>
        <Col><Form.Control type="text" 
        placeholder="Header" 
        onChange={onHeaderChange}/></Col>
        <Col><Form.Control type="text" 
        placeholder="Footer" 
        onChange={onFooterChange}/></Col>
      </Row>
      <Form.Control type="submit" style={{textAlign:'center',color:'white',backgroundColor:'blue'}} placeholder="Submit" className="mt-2 mb-4"/>
    </Form>
    <Container className="d-flex">
      <Row className="justify-content-md-center" >
            {memes.map(meme=><Meme meme={meme} onClick={onClick} key={meme.id} footer={footer} header={header}/>)}
      </Row>
    </Container>
    </>
  );
}

export default App;
