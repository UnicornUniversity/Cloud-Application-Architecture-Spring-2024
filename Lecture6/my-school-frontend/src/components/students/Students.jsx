import StudentFilter from "./StudentFilter";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StudentCard from "./StudentCard";

const dml = require("../../data/dataManagementLayer");


export default function Students() {
    const params = useParams();

    const [classesData, setClassesData] = useState([]);
    const [subjectData, setSubjectData] = useState([]);
    const [classSelected, setClassSelected] = useState(parseInt(params.idClass) || 1);
    const [subjectSelected, setSubjectSelected] = useState(0);
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        dml.readClasses().then((items) => setClassesData(items));
        dml.readSubjects().then((items) => setSubjectData(items));
    }, []);

    useEffect(() => {
        dml.readStudents(classSelected).then((items) => setStudentData(items));
    }, [classSelected]);

    return (
        <>
            <div className="row">
                <StudentFilter
                    classesList={classesData}
                    subjectList={subjectData}
                    classesHandler={setClassSelected}
                    subjectHandler={setSubjectSelected}
                    selectedClass={classSelected}
                />
            </div>

            {
                studentData.map((student) =>
                    <StudentCard
                        idStudent={student.id}
                        name={student.name}
                        selectedSubject={subjectSelected}
                        dob={student.dob}
                    />)
            }
        </>
    )
}