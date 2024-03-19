function getStudentsForClass(allStudents, idClass){
    const studentsInClass = [];
    for (let i = 0; i < allStudents.length; i++) {
        const student = allStudents[i];
        if (parseInt(student.class) === idClass){
            studentsInClass.push(student);
        }
    }
    return studentsInClass;
}

module.exports.getStudentsForClass = getStudentsForClass;