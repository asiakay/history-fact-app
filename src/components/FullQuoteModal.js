import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';

const FullQuoteModal = styled(Modal)`
  .modal-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    max-width: 80%;
  }

  // Rest of the styles remain the same
`;


const FullQuote = ({ show, handleClose, description }) => {
    return (
      <FullQuoteModal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Full Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </FullQuoteModal>
    );
  };
  
  export default FullQuote;
