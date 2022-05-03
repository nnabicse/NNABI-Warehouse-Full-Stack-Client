import React from 'react';

const IncomingPurchase = (props) => {
    const { name, price, desc, img, quantity, supplier } = props.purchase;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{desc}</td>
            <td>{quantity}</td>
            <td>{supplier}</td>
            <td><button>Recieved</button></td>
        </tr>
    );
};

export default IncomingPurchase;