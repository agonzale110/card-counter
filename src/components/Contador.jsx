import React from 'react'
import { Container, Row, Badge, ButtonGroup, Button, Col } from 'react-bootstrap'

function Contador({count, setCount}) {
  return (
    <Container className='text-center mt-4'>
        <div>
            <Button size='lg' variant="secondary" disabled style={{opacity: 1}}>
                Contador <Badge bg="primary">{count}</Badge>
            </Button>
        </div>
        <ButtonGroup className='mt-3'>
            <Button variant='success' onClick={() => setCount(count+1)}>
                Incrementar
            </Button>
            <Button variant='danger' onClick={() => setCount(count-1)}>
                Decrementar
            </Button>
            <Button variant='outline-primary' onClick={() => setCount(0)}>
                Reset
            </Button>
        </ButtonGroup>
    </Container>
  )
}

export default Contador