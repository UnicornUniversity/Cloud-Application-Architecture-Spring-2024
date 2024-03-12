const express = require("express");
const dml = require("../data/dataManagementLayer");

const router = express.Router();

router.get("/list", async (req, res, next) => {
    console.log("classes list requested");
    const classesData = await dml.readClasses();
    res.json({items: classesData});
});

module.exports = router;