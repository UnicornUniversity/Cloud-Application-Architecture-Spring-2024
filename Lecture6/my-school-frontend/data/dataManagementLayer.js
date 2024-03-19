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

async function readClasses() {
    const data = await fetchRoutines("classes/listWithDetails");
    return data.items;
}