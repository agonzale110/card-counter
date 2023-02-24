import React from 'react'

import {Card as RCard, Button, Popover, OverlayTrigger} from 'react-bootstrap';

function Card({title, count, description, thumbnail}) {

  const popover = (
    <Popover>
      <Popover.Header as="h3">Descripción extendida</Popover.Header>
      <Popover.Body>
        {description}
      </Popover.Body>
    </Popover>
  )

  return (
    <RCard className='h-100'>
      <RCard.Header style={{padding: 0}}>
        <RCard.Img variant="top" src={thumbnail} style={{maxHeight: '130px', objectFit: 'cover'}} />
      </RCard.Header>
      <RCard.Body>
        <RCard.Title>{title} - <span className='text-danger fw-bold'>{count}</span></RCard.Title>
        <RCard.Text>
          {description}
        </RCard.Text>
      </RCard.Body>
      <RCard.Footer>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <Button variant="primary">Detalle</Button>
        </OverlayTrigger>
      </RCard.Footer>
    </RCard>
  )
}

export default Card