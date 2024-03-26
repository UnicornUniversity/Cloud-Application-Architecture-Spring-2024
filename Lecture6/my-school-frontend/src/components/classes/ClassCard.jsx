import MarkInfo from "./MarkInfo";
import {Link} from "react-router-dom";

export default function ClassCard({id, name, count, badMarks, mediumMarks, goodMarks}){
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Class {id} "{name}"</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Students: {count}</li>
                <li className="list-group-item">
                    <MarkInfo mode="0" title="Bad" value={badMarks} />
                    <MarkInfo mode="1" title="Medium" value={mediumMarks} />
                    <MarkInfo mode="2" title="Good" value={goodMarks} />
                </li>
            </ul>
            <div className="card-body">
                <Link to={"/students/" + parseInt(id)}>Show students</Link>
            </div>
        </div>
    );
}