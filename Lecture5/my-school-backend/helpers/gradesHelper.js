function getGradesDistribution(students, allGrades){
    const gradesMap = new Map();
    for (let i = 1; i <= 5; i++) {
        gradesMap.set(i, 0);
    }

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        for (let j = 0; j < allGrades.length; j++) {
            const grade = allGrades[j];
            if (parseInt(student.id) !== parseInt(grade.idStudent)) continue;
            const mark = parseInt(grade.mark);
            const v = gradesMap.get(mark);
            gradesMap.set(mark, v + 1);
        }
    }
    return gradesMap;
}

module.exports.getGradesDistribution = getGradesDistribution;