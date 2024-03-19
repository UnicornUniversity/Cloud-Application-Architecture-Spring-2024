import ClassCard from "./ClassCard";
import {useEffect, useState} from "react";

const dml = require("../data/dataManagementLayer");

export default function Classes() {
    const [classesData, setClassesData] = useState([]);

    useEffect(() => {
        dml.readClasses().then((items) => setClassesData(items))
    }, []);

    return (
        <div className="row">
            <div className="card-group">
                {
                    classesData.map((item) =>
                        <ClassCard id={item.id}
                                   name={item.name}
                                   count={item.count}
                                   badMarks={item.badMarks}
                                   mediumMarks={item.mediumMarks}
                                   goodMarks={item.goodMarks}
                        />
                    )
                }
            </div>
        </div>

    )
}