import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import './AddItem.css';

const AddItem = () => {
    const nameRef = useRef()
    const priceRef = useRef()
    const qtyRef = useRef()
    const imageRef = useRef()
    const descRef = useRef()
    const emailRef = useRef()
    const supplierRef = useRef()
    const handleSubmitButton = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = qtyRef.current.value;
        const image = imageRef.current.value;
        const desc = descRef.current.value
        const supplier = supplierRef.current.value
        const email = emailRef.current.value;

        const newItem = { name, price, quantity, image, desc, supplier, email }
        console.log(newItem);

        fetch(`http://localhost:5000/item`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
    }
    return (
        <div className='add-item-section-container'>
            <div>
                <div className='add-item-section-header-container'>
                    <h1 className='add-item-section-header'>ADD NEW ITEM</h1>
                </div>
                <div className='add-item-form-container'>
                    <Form onSubmit={handleSubmitButton}>
                        <Form.Group className="mb-3" controlId="formBasicItemName">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" placeholder="Enter Item Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicItemPrice">
                            <Form.Label>Item Price</Form.Label>
                            <Form.Control ref={priceRef} type="number" placeholder="Enter Item Price" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicItemQty">
                            <Form.Label>Item Quantity</Form.Label>
                            <Form.Control ref={qtyRef} type="number" placeholder="Enter Item Quantity" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSupplier">
                            <Form.Label>Supplier Name</Form.Label>
                            <Form.Control ref={supplierRef} type="text" placeholder="Enter Supplier Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicItemDesc">
                            <Form.Label>Item Description</Form.Label>
                            <Form.Control ref={descRef} type="text" placeholder="Enter Item Description" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicItemImage">
                            <Form.Label>Item Image Link</Form.Label>
                            <Form.Control ref={imageRef} type="text" placeholder="Enter Item Image Link" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email ID</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter Email ID" />
                        </Form.Group>
                        <div className='add-item-button-container'>
                            <button type="submit">
                                Submit
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;