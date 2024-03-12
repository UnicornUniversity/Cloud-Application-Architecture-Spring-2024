const express = require("express");
const dml = require("../data/dataManagementLayer");

const router = express.Router();

router.get("/list", async (req, res, next) => {
    console.log("subjects list requested");
    const subjectsData = await dml.readSubjects();
    res.json({items: subjectsData});
});

module.exports = router;