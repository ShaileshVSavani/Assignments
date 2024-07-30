import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({id, title, price , image, description}) => {
  return (
    <div>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>Price: ${price}</p>
        <p>{description}</p>
        <button>Add to Cart</button>
  

{/* <Card >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card> */}

    </div>
  )
}

export default Product