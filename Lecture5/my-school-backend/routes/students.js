const express = require("express");
const dml = require("../data/dataManagementLayer");

const router = express.Router();

router.get("/get/:id", async (req, res, next) => {
    console.log("Looking for a student with id = " + req.params.id);
    const allStudents = await dml.readStudents();
    const student = allStudents.find((st) => parseInt(st.id) === parseInt(req.params.id));
    if (student != null){
        const allClasses = await dml.readClasses();
        const cls = allClasses.find((cl) => parseInt(cl.id) === parseInt(student.class));
        student.className = cls.name;
    }
    res.json(student);
});

router.get("/test", async (req, res, next) => {
    console.log("This is test");
    res.json({test: "test"});
});



module.exports = router;