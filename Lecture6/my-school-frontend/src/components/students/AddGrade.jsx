import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";

const dml = require("../../data/dataManagementLayer");

export default function AddGrade({idStudent, idSubject, isVisible, visibilityHandler}) {

    const [show, setShow] = useState(false);
    const [gradeValue, setGradeValue] = useState(1);

    useEffect(() => {
        setShow(isVisible);
    }, [isVisible]);

    function handleClose() {
        setShow(false);
        visibilityHandler(false);
    }

    function gradeSelectHandler(e) {
        setGradeValue(e.target.value);
    }

    function saveGrade() {
        const idStudentInt = parseInt(idStudent);
        const idSubjectInt = parseInt(idSubject);
        const dtDate = new Date();
        const month = dtDate.getMonth() + 1;
        const day = dtDate.getDate();
        const dtStr = dtDate.getFullYear() + "-" + month + "-" + day;
        const data = {
            idStudent: idStudentInt,
            idSubject: idSubjectInt,
            date: dtStr,
            mark: gradeValue
        };
        dml.addGrade(data).then(
            (res) => handleClose(),
            (reject) => console.log(reject.message)
        );
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Add Grade</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>
                    <label htmlFor="cbGrade" className="col-form-label-sm">Mark</label>
                    <select className="form-select form-control form-control-sm"
                            id="cbGrade"
                            onChange={gradeSelectHandler}>
                        <option selected={true}>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={saveGrade}>Save</Button>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}