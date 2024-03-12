const fs = require('node:fs/promises');
const path = require("path");

const rootPath = path.dirname(process.mainModule.filename);
const dataPath = path.join(rootPath, "data");

console.log("rootPath=" + rootPath);
console.log("dataPath=" + dataPath);

const CLASSES = "classes.json";
const STUDENTS = "persons.json";
const GRADES = "grades.json";
const SUBJECTS = "subjects.json";

async function readDataRoutines(entityName) {
    const rawFileContent = await fs.readFile(path.join(dataPath, entityName));
    return JSON.parse(rawFileContent);
}

async function saveDataRoutines(entityName, items) {
    return await fs.writeFile(path.join(dataPath, entityName), JSON.stringify(items), {encoding: "utf-8"});
}

async function readClasses() {
    return await readDataRoutines(CLASSES);
}

async function readSubjects() {
    return await readDataRoutines(SUBJECTS);
}

async function readStudents() {
    return await readDataRoutines(STUDENTS);
}

async function readGrades() {
    return await readDataRoutines(GRADES);
}

async function saveGrades(items){
    return await saveDataRoutines(GRADES, items);
}

module.exports.readClasses = readClasses;
module.exports.readSubjects = readSubjects;
module.exports.readStudents = readStudents;
module.exports.readGrades = readGrades;
module.exports.saveGrades = saveGrades;