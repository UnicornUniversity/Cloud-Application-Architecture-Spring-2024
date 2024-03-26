import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";

export default function Details({name, dob, isVisible, visibilityHandler}){

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(isVisible);
    }, [isVisible]);

    function handleClose(){
        setShow(false);
        visibilityHandler(false);
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h3>{name}</h3>
                <p>{dob}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}