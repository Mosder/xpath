fetchInfo(0);

async function fetchInfo(v: number) {
    let response = await fetch("fetch.php?v=" + v);
    if (!response.ok)
        return response.status;
    else
        displayInfo(await response.json(), v === 0);
}
function displayInfo(info: Object, v: boolean) {
    let tabelus = document.getElementById("tabelus");
    tabelus.innerHTML = "<tr><th>Index</th><th id='colName'>Voivodeship</th></tr>"
    for (let key of Object.keys(info)) {
        let newRow = document.createElement("tr");
        let tdIndex = document.createElement("td");
        let tdPlace = document.createElement("td");
        tdIndex.innerText = key;
        let place = (info as any)[key]["0"];
        tdPlace.innerText = place;
        let text: string;
        if (v) {
            text = "Voivodeship";
            tdPlace.addEventListener("click", () => fetchInfo((parseInt(key) + 1) * 2));
            tdPlace.style.cursor = "pointer";
        }
        else
            text = "City";
        document.getElementById("colName").innerText = text;
        newRow.appendChild(tdIndex);
        newRow.appendChild(tdPlace);
        tabelus.appendChild(newRow);
    }
}