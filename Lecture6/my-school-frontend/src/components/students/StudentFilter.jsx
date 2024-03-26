export default function StudentFilter({classesList, subjectList, classesHandler, subjectHandler, selectedClass}) {
    const allTitle = "<ALL>";
    const subjectListAll = [{id: 0, name: allTitle}, ...subjectList];

    function classChanged(e){
        classesHandler(e.target.value);
    }

    function subjectChanged(e){
        subjectHandler(e.target.value);
    }

    return (
        <>
            <div className="col-sm">
                <label htmlFor="cbClass" className="col-form-label-sm">Class:</label>
                <select className="form-select form-control form-control-sm" id="cbClass" onChange={classChanged}>
                    {
                        classesList.map((cls) =>
                            <option value={cls.id} selected={parseInt(selectedClass) === cls.id} >{cls.name}</option>
                        )
                    }
                </select>
            </div>
            <div className="col-sm">
                <label htmlFor="cbSubject" className="col-form-label-sm">Subject:</label>
                <select className="form-select form-control form-control-sm" id="cbSubject" onChange={subjectChanged}>
                    {
                        subjectListAll.map((cls) =>
                            <option value={cls.id}>{cls.name}</option>
                        )
                    }
                </select>
            </div>
        </>
    );
}