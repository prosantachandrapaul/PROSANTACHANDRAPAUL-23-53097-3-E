const studentName = localStorage.getItem("studentName");
const savedEvents = localStorage.getItem("events");
const summary = document.getElementById("summary");

let events = savedEvents ? JSON.parse(savedEvents) : [];

if (!studentName || events.length === 0) {
    summary.innerHTML =
        "Registration information not found. Please register again.";
} else {
    let result = "Name: " + studentName + "<br><br>";
    result += "<b>Events:</b><br>";

    for (let i = 0; i < events.length; i++) {
        result += events[i] + "<br>";
    }

    let total = events.length * 150;

    result += "<br><b>Total Fee: " + total + " Taka</b>";

    summary.innerHTML = result;
}

function goBack() {
    window.location.href = "index.html";
}
