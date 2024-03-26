const baseUrl = "http://localhost:3001/";

async function fetchRoutines(url) {
    const urlFull = baseUrl + url;
    console.log("requesting: " + urlFull);
    let result = null;
    await fetch(urlFull)
        .then((res) => res.json())
        .then((parsedJson) => result = parsedJson);
    console.log("result= " + JSON.stringify(result));
    return result;
}

function saveRoutines(url, data) {
    const urlFull = baseUrl + url;
    console.log("posting: " + urlFull);
    return fetch(urlFull,
        {method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)
        }
    );
}

function addGrade(data){
    return saveRoutines("grades/add", data);
}

async function readClasses() {
    const data = await fetchRoutines("classes/listWithDetails");
    return data.items;
}

async function readSubjects() {
    const data = await fetchRoutines("subjects/list");
    return data.items;
}

async function readStudents(idClass) {
    const data = await fetchRoutines("students/class/" + idClass);
    return data;
}

module.exports.readClasses = readClasses;
module.exports.readSubjects = readSubjects;
module.exports.readStudents = readStudents;
module.exports.addGrade = addGrade;
