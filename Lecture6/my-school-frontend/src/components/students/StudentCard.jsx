import Details from "./Details";
import {useState} from "react";
import AddGrade from "./AddGrade";

export default function StudentCard({idStudent, name, dob, selectedSubject}){

    const [isDetailsVisible, setDetailsVisible] = useState(false);
    const [isGradeVisible, setGradeVisible] = useState(false);

    function openDetailsWindow(){
        setDetailsVisible(true);
    }

    function openGradeWindow(){
        setGradeVisible(true);
    }

    return(
        <div className="row row-margin student-panel">
            <div className="col-sm">
                <span><b>{name}</b></span>
            </div>
            <div className="col-sm">
                PERFORMANCE
            </div>
            <div className="col-sm">
                {parseInt(selectedSubject) > 0 &&
                    <button type="button" className="btn btn-primary btn-sm" onClick={openGradeWindow}>Add Grade</button>
                }
                <AddGrade idStudent={idStudent} idSubject={selectedSubject} isVisible={isGradeVisible} visibilityHandler={setGradeVisible}/>
            </div>
            <div className="col-sm">
                <button type="button" className="btn btn-primary btn-sm" onClick={openDetailsWindow}>Details</button>
                <Details isVisible={isDetailsVisible} name={name} dob={dob} visibilityHandler={setDetailsVisible}  />
            </div>
        </div>
    )
}