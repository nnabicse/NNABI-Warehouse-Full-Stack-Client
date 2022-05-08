import React from 'react';
import { Card } from 'react-bootstrap';
import './OutgoingOrder.css'

const OutgoingOrder = (props) => {
    const { name, price, img, desc, quantity, client } = props.order;
    return (
        <div className='outgoing-order-items-card-container'>
            <Card className='outgoing-order-inventory-items-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <span className='heading'>Item:</span> {name}</Card.Title>
                    <Card.Title> <span className='heading'>Client:</span> {client}</Card.Title>
                    <Card.Title> <span className='heading'>Price:</span> {price} USD</Card.Title>
                    <Card.Title> <span className='heading'>Quantity:</span> {quantity} Units</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default OutgoingOrder;