import React, { useState } from 'react';
import { Modal , Button} from 'react-bootstrap';

const Modals = (props) => {
    const [show, setShow] = useState(false);
    const {title, image, description,price}= props.product

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
        Details
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <img className="w-50" src={image} alt="" />
          <h4>{price} </h4>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default Modals;