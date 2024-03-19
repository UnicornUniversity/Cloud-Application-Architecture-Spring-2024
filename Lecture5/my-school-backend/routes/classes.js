const express = require("express");
const dml = require("../data/dataManagementLayer");
const studentHelper  = require("../helpers/studentsHelper");
const gradesHelper  = require("../helpers/gradesHelper");

const router = express.Router();

router.get("/list", async (req, res, next) => {
    console.log("classes list requested");
    const classesData = await dml.readClasses();
    res.json({items: classesData});
});

router.get("/listWithDetails", async (req, res, next) => {
    console.log("listWithDetails requested");
    const classesData = await dml.readClasses();
    const studentsData = await dml.readStudents();
    const gradesData = await dml.readGrades();
    for (let i = 0; i < classesData.length; i++) {
        const classInfo = classesData[i];
        const studentsInClass = studentHelper.getStudentsForClass(studentsData, classInfo.id);
        const gradesDist = gradesHelper.getGradesDistribution(studentsInClass, gradesData);
        let totalMarksCount = 0;
        for (let j = 0; j < gradesDist.size; j++) {
            totalMarksCount += gradesDist.get(j + 1);
        }
        classInfo.count = studentsInClass.length;
        classInfo.goodMarks = Math.floor((gradesDist.get(4) + gradesDist.get(5)) / totalMarksCount * 100);
        classInfo.mediumMarks = Math.floor((gradesDist.get(3)) / totalMarksCount * 100);
        classInfo.badMarks = Math.floor((gradesDist.get(1) + gradesDist.get(2)) / totalMarksCount * 100);
    }
    res.json({items: classesData});
});

module.exports = router;