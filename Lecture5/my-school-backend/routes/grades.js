const express = require("express");
const dml = require("../data/dataManagementLayer");

const router = express.Router();

router.post("/add", async (req, res, next) => {
    console.log("grade add executed");
    console.log(req.body);
    //const newItem = {...req.body};
    const newItem = {
        idStudent: req.body.idStudent,
        idSubject: req.body.idSubject,
        date: req.body.date,
        mark: req.body.mark
    }
    const existedGrades = await dml.readGrades();
    const allGrades = [newItem, ...existedGrades];
    await dml.saveGrades(allGrades);
    res.json(newItem);
});

module.exports = router;