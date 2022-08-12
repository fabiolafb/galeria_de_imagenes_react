import React from 'react'
import '../assets/css/Card.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function varCard({ imagen, name, description }) {
  return (
    <section>
    <Card class="card_edit" style={{ width: '35rem' }}>
      <Card.Img src={imagen} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="outline-info">Más info </Button>
      </Card.Body>
    </Card>
    </section>
  );
}
export default varCard;   