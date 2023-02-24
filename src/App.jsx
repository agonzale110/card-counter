import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap'

import cards from './data/cards';
import Card from './components/Card'
import Contador from './components/Contador'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className="App" fluid>
      <Row>
        {
          cards.map(({id, title, description, thumbnail}) =>
            <Col key={id} className='py-2' xs={12} md={4} lg={3} xl={2}>
              <Card title={title} count={count} description={description} thumbnail={thumbnail}/>
            </Col>
          )
        }
      </Row>
      
      <Contador count={count} setCount={setCount} />
    </Container>
  )
}

export default App
